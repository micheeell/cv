import { chromium } from "playwright";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";

// simple static server for dist
const serve = (req, res) => {
  const filePath = path.join("dist", req.url === "/" ? "en/index.html" : req.url);
  const exists = fs.existsSync(filePath);
  const file = exists ? filePath : path.join("dist", "en", "index.html");
  fs.createReadStream(file).pipe(res);
};
const server = http.createServer(serve);
server.listen(8080);

const langs = ["en", "es", "fr"];
fs.mkdirSync("pdf", { recursive: true });

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();

for (const lang of langs) {
  const url = lang === "es"
      ? "http://localhost:8080/print.html"
      : `http://localhost:8080/${lang}/print.html`;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.emulateMedia("print");
  await page.pdf({
    path: `dist/assets/pdf/CV-ayoul-${lang}.pdf`,
    format: "A4",
    printBackground: true,
    margin: { top: "20mm", right: "15mm", bottom: "20mm", left: "15mm" }
  });
}

await browser.close();
server.close();
console.log("PDFs written to /pdf");
