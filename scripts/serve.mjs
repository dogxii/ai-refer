import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requestedPort = Number(process.env.PORT ?? 4173);
const maxAttempts = 20;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL(request.url ?? "/", "http://localhost");
    const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
    const absolutePath = path.resolve(root, cleanPath);

    if (!absolutePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const filePath = fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()
      ? path.join(absolutePath, "index.html")
      : absolutePath;

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      const extension = path.extname(filePath);
      response.writeHead(200, {
        "Content-Type": mimeTypes[extension] ?? "application/octet-stream",
        "Cache-Control": "no-store",
      });
      response.end(data);
    });
  });
}

function listen(port, attempt = 1) {
  const server = createServer();

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && attempt < maxAttempts) {
      listen(port + 1, attempt + 1);
      return;
    }

    console.error(error);
    process.exit(1);
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`AI Refer web is running at http://127.0.0.1:${port}`);
  });
}

listen(requestedPort);

