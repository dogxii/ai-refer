import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function readText(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function fail(message) {
  errors.push(message);
}

function walk(dir) {
  const absolute = path.join(root, dir);
  if (!fs.existsSync(absolute)) return [];

  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(relative);
    return relative;
  });
}

let index;

try {
  index = JSON.parse(readText("ai-index.json"));
} catch (error) {
  fail(`ai-index.json is not valid JSON: ${error.message}`);
}

if (index) {
  if (!index.entrypoints?.llms || !exists(index.entrypoints.llms)) {
    fail("entrypoints.llms is missing or points to a missing file");
  }

  if (
    !index.entrypoints?.pack_creation_protocol ||
    !exists(index.entrypoints.pack_creation_protocol)
  ) {
    fail("entrypoints.pack_creation_protocol is missing or points to a missing file");
  }

  if (!Array.isArray(index.packs)) {
    fail("ai-index.json must contain a packs array");
  } else {
    const ids = new Set();
    const paths = new Set();

    for (const pack of index.packs) {
      if (!pack.id) fail("pack is missing id");
      if (!pack.title) fail(`${pack.id ?? "unknown pack"} is missing title`);
      if (!pack.path) fail(`${pack.id ?? "unknown pack"} is missing path`);
      if (!pack.status) fail(`${pack.id ?? "unknown pack"} is missing status`);
      if (!pack.when_to_use) fail(`${pack.id ?? "unknown pack"} is missing when_to_use`);
      if (!Array.isArray(pack.tags) || pack.tags.length === 0) {
        fail(`${pack.id ?? "unknown pack"} must include tags`);
      }

      if (pack.id) {
        if (ids.has(pack.id)) fail(`duplicate pack id: ${pack.id}`);
        ids.add(pack.id);
      }

      if (pack.path) {
        if (paths.has(pack.path)) fail(`duplicate pack path: ${pack.path}`);
        paths.add(pack.path);

        if (!exists(pack.path)) {
          fail(`${pack.id ?? pack.path} points to missing file: ${pack.path}`);
        } else {
          const text = readText(pack.path);
          if (!text.startsWith("# ")) fail(`${pack.path} must start with an H1 title`);
          for (const section of [
            "## Purpose",
            "## When To Use",
            "## Core Principles",
            "## Rules For AI Agents",
          ]) {
            if (!text.includes(section)) fail(`${pack.path} is missing ${section}`);
          }
        }
      }
    }
  }
}

const llms = exists("llms.txt") ? readText("llms.txt") : "";
const readme = exists("README.md") ? readText("README.md") : "";

if (index?.packs) {
  for (const pack of index.packs) {
    if (pack.path && !llms.includes(pack.path)) {
      fail(`llms.txt does not mention ${pack.path}`);
    }

    if (pack.path && pack.id !== "meta.how-to-extract-guidelines" && !readme.includes(pack.path)) {
      fail(`README.md does not mention ${pack.path}`);
    }
  }
}

const publishedContentFiles = walk("content").filter((file) => file.endsWith(".md"));

for (const file of publishedContentFiles) {
  const text = readText(file);

  if (/https?:\/\//i.test(text)) {
    fail(`${file} contains a URL; published packs should not include research links`);
  }

  if (/\b(bilibili|youtube|xiaohongshu)\b/i.test(text)) {
    fail(`${file} mentions a video platform; keep research trails out of published packs`);
  }
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("AI Refer validation passed.");

