const state = {
  packs: [],
  activePack: null,
  docs: new Map(),
  search: "",
  activeHeading: null,
};

const elements = {
  reader: document.querySelector("#reader"),
  packNav: document.querySelector("#packNav"),
  packCount: document.querySelector("#packCount"),
  searchInput: document.querySelector("#searchInput"),
  toc: document.querySelector("#toc"),
  navToggle: document.querySelector(".nav-toggle"),
  scrim: document.querySelector("#scrim"),
};

const groupLabels = {
  meta: "Meta",
  ui: "UI",
  product: "Product",
  code: "Code",
};

const codeSnippets = new Map();
let headingObserver = null;

init();

async function init() {
  bindEvents();

  try {
    const index = await fetchJson("ai-index.json");
    state.packs = index.packs.filter((pack) => pack.status === "active");
    elements.packCount.textContent = `${state.packs.length} active packs`;
    await preloadDocs();
    renderPackNav();
    await loadInitialPack();
  } catch (error) {
    renderError("Could not load AI Refer.", error);
  }
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderPackNav();
  });

  elements.navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    elements.navToggle.setAttribute("aria-expanded", String(isOpen));
    elements.scrim.hidden = !isOpen;
  });

  elements.scrim.addEventListener("click", closeMobileNav);

  window.addEventListener("hashchange", () => {
    const id = getPackIdFromHash();
    if (id && id !== state.activePack?.id) selectPack(id, { focus: false });
  });

  document.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy-code]");
    if (!copyButton) return;

    const id = copyButton.getAttribute("data-copy-code");
    const snippet = codeSnippets.get(id);
    if (!snippet) return;

    try {
      await navigator.clipboard.writeText(snippet);
      const original = copyButton.textContent;
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = original;
      }, 1200);
    } catch {
      copyButton.textContent = "Failed";
      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1200);
    }
  });
}

async function preloadDocs() {
  await Promise.all(
    state.packs.map(async (pack) => {
      try {
        const markdown = await fetchText(pack.path);
        const searchableText = stripMarkdown(markdown);
        state.docs.set(pack.id, { markdown, searchableText });
      } catch {
        state.docs.set(pack.id, {
          markdown: "",
          searchableText: "",
          loadError: true,
        });
      }
    }),
  );
}

async function loadInitialPack() {
  const hashId = getPackIdFromHash();
  const defaultPack =
    state.packs.find((pack) => pack.id === hashId) ??
    state.packs.find((pack) => pack.id !== "meta.how-to-extract-guidelines") ??
    state.packs[0];

  if (defaultPack) await selectPack(defaultPack.id, { focus: false, replaceHash: !hashId });
}

async function selectPack(id, options = {}) {
  const pack = state.packs.find((item) => item.id === id);
  if (!pack) return;

  state.activePack = pack;
  renderPackNav();
  renderDocument(pack);
  closeMobileNav();

  if (!options.replaceHash) {
    history.replaceState(null, "", `#${pack.id}`);
  }

  if (options.focus !== false) {
    elements.reader.focus({ preventScroll: true });
  }
}

function renderPackNav() {
  const filtered = getFilteredPacks();
  const groups = groupBy(filtered, (pack) => pack.id.split(".")[0]);

  if (filtered.length === 0) {
    elements.packNav.innerHTML = `<div class="empty-state"><p>No matching packs</p></div>`;
    return;
  }

  elements.packNav.innerHTML = Object.entries(groups)
    .map(([group, packs]) => {
      const links = packs
        .map((pack) => {
          const isActive = pack.id === state.activePack?.id ? " is-active" : "";
          return `
            <button class="pack-link${isActive}" type="button" data-pack-id="${escapeAttribute(pack.id)}">
              <span class="pack-title">${escapeHtml(pack.title)}</span>
              <span class="pack-meta">${escapeHtml(pack.when_to_use)}</span>
            </button>
          `;
        })
        .join("");

      return `
        <section class="pack-group">
          <h2 class="pack-group-title">${escapeHtml(groupLabels[group] ?? group)}</h2>
          ${links}
        </section>
      `;
    })
    .join("");

  elements.packNav.querySelectorAll("[data-pack-id]").forEach((button) => {
    button.addEventListener("click", () => selectPack(button.dataset.packId));
  });
}

function renderDocument(pack) {
  const doc = state.docs.get(pack.id);

  if (!doc || doc.loadError) {
    renderError(`Could not load ${pack.title}.`, new Error(pack.path));
    return;
  }

  codeSnippets.clear();
  const rendered = markdownToHtml(doc.markdown);
  const title = firstMarkdownHeading(doc.markdown) ?? pack.title;

  elements.reader.innerHTML = `
    <article class="doc">
      <header class="doc-header">
        <div class="doc-kicker">
          <span class="badge">${escapeHtml(pack.id.split(".")[0])}</span>
          <span class="path-pill">${escapeHtml(pack.path)}</span>
        </div>
        <h1>${escapeHtml(title)}</h1>
        <p class="doc-summary">${escapeHtml(pack.when_to_use)}</p>
        <div class="tag-row" aria-label="Tags">
          ${pack.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </header>
      <div class="doc-body">${rendered.html}</div>
    </article>
  `;

  renderToc(rendered.toc);
  observeHeadings();
}

function renderToc(toc) {
  const visibleItems = toc.filter((item) => item.level === 2 || item.level === 3);

  if (visibleItems.length === 0) {
    elements.toc.innerHTML = "";
    return;
  }

  elements.toc.innerHTML = visibleItems
    .map(
      (item) =>
        `<a href="#${escapeAttribute(state.activePack.id)}:${escapeAttribute(item.id)}" class="is-h${item.level}" data-heading-id="${escapeAttribute(item.id)}">${escapeHtml(item.text)}</a>`,
    )
    .join("");

  elements.toc.querySelectorAll("[data-heading-id]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById(link.dataset.headingId)?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    });
  });
}

function observeHeadings() {
  if (headingObserver) headingObserver.disconnect();

  const headings = [...elements.reader.querySelectorAll(".doc-body h2, .doc-body h3")];
  if (headings.length === 0) return;

  headingObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (!visible) return;

      state.activeHeading = visible.target.id;
      elements.toc.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("is-active", link.dataset.headingId === state.activeHeading);
      });
    },
    {
      rootMargin: "-90px 0px -70% 0px",
      threshold: 0.01,
    },
  );

  headings.forEach((heading) => headingObserver.observe(heading));
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const toc = [];
  let paragraph = [];
  let listType = null;
  let inCode = false;
  let codeLines = [];
  let codeIndex = 0;

  const closeParagraph = () => {
    if (paragraph.length === 0) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  };

  const openList = (type) => {
    if (listType === type) return;
    closeList();
    html.push(`<${type}>`);
    listType = type;
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        const code = codeLines.join("\n");
        const id = `code-${codeIndex++}`;
        codeSnippets.set(id, code);
        html.push(`
          <div class="code-block">
            <button class="copy-code" type="button" data-copy-code="${id}">Copy</button>
            <pre><code>${escapeHtml(code)}</code></pre>
          </div>
        `);
        codeLines = [];
        inCode = false;
      } else {
        closeParagraph();
        closeList();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (line.trim() === "") {
      closeParagraph();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = uniqueSlug(text, toc);
      toc.push({ level, text, id });
      html.push(`<h${level} id="${escapeAttribute(id)}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^\s*-\s+(.*)$/);
    if (bullet) {
      closeParagraph();
      openList("ul");
      html.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }

    const numbered = line.match(/^\s*\d+\.\s+(.*)$/);
    if (numbered) {
      closeParagraph();
      openList("ol");
      html.push(`<li>${inlineMarkdown(numbered[1])}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line.trim());
  }

  closeParagraph();
  closeList();

  return { html: html.join("\n"), toc };
}

function inlineMarkdown(value) {
  const codeParts = [];
  const escaped = escapeHtml(value).replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@CODE_${codeParts.length}@@`;
    codeParts.push(`<code>${code}</code>`);
    return token;
  });

  let output = escaped
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const safeHref = String(href).replace(/"/g, "%22");
      return `<a href="${safeHref}">${label}</a>`;
    });

  codeParts.forEach((part, index) => {
    output = output.replace(`@@CODE_${index}@@`, part);
  });

  return output;
}

function getFilteredPacks() {
  if (!state.search) return state.packs;

  return state.packs.filter((pack) => {
    const doc = state.docs.get(pack.id);
    const text = [
      pack.id,
      pack.title,
      pack.path,
      pack.when_to_use,
      pack.tags.join(" "),
      doc?.searchableText ?? "",
    ]
      .join(" ")
      .toLowerCase();

    return text.includes(state.search);
  });
}

function getPackIdFromHash() {
  const value = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const [packId] = value.split(":");
  return packId || null;
}

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  elements.navToggle.setAttribute("aria-expanded", "false");
  elements.scrim.hidden = true;
}

function renderError(message, error) {
  elements.reader.innerHTML = `
    <section class="error-state" role="alert">
      <div>
        <strong>${escapeHtml(message)}</strong>
        <p>${escapeHtml(error?.message ?? "Unknown error")}</p>
      </div>
    </section>
  `;
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

function firstMarkdownHeading(markdown) {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function groupBy(items, getKey) {
  return items.reduce((groups, item) => {
    const key = getKey(item);
    groups[key] ??= [];
    groups[key].push(item);
    return groups;
  }, {});
}

function uniqueSlug(text, toc) {
  const base =
    text
      .toLowerCase()
      .replace(/`([^`]+)`/g, "$1")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section";

  let id = base;
  let count = 2;
  const used = new Set(toc.map((item) => item.id));
  while (used.has(id)) {
    id = `${base}-${count++}`;
  }

  return id;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

