// Builds dist/standalone.html — the whole app in ONE file
// (styles + script inlined). Handy to share or open anywhere.
import { readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const js = readFileSync("dist/app.js", "utf8");

const out = html
  .replace('<link rel="stylesheet" href="styles.css" />', `<style>\n${css}\n</style>`)
  .replace('<script src="dist/app.js"></script>', `<script>\n${js}\n</script>`);

writeFileSync("dist/standalone.html", out);
console.log("dist/standalone.html written");
