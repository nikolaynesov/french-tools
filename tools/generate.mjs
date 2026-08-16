// Regenerates content/src/drills.ts and content/src/vocab.ts from content/raw/*.json.
// Run from the french/ root:  node tools/generate.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const RAW = "content/raw";
const OUT = "content/src";

const drills = readdirSync(RAW)
  .filter((f) => f.startsWith("drills-") && f.endsWith(".json"))
  .sort()
  .flatMap((f) => JSON.parse(readFileSync(join(RAW, f), "utf8")));

const vocab = JSON.parse(readFileSync(join(RAW, "vocab.json"), "utf8"));

const RULES = new Set([
  "present", "passe-compose", "imparfait", "futur-proche", "imperatif",
  "futur-simple", "passe-recent", "conditionnel-present", "conditionnel-passe",
  "plus-que-parfait", "gerondif", "si-clauses", "discours-rapporte",
  "concordance-temps", "restriction", "cause-consequence",
]);

const problems = [];
const ids = new Set();
for (const d of drills) {
  if (ids.has(d.id)) problems.push(`duplicate id ${d.id}`);
  ids.add(d.id);
  if (!RULES.has(d.ruleId)) problems.push(`${d.id}: unknown ruleId ${d.ruleId}`);
  if (!Array.isArray(d.answer) || !d.answer.length) problems.push(`${d.id}: empty answer`);
  if (d.kind === "cloze" && !d.prompt.includes("___")) problems.push(`${d.id}: cloze without ___`);
  if (d.kind === "choice") {
    if (!d.choices?.length) problems.push(`${d.id}: choice without choices`);
    else if (!d.answer.some((a) => d.choices.includes(a)))
      problems.push(`${d.id}: answer not among choices`);
  }
  for (const l of ["fr", "en", "uk"])
    if (!d.explain?.[l]) problems.push(`${d.id}: explain.${l} empty`);
}
for (const v of vocab) {
  for (const k of ["fr", "uk", "en", "pos", "example", "source"])
    if (!v[k]) problems.push(`${v.id}: ${k} empty`);
}

if (problems.length) {
  console.error("Content problems:\n  " + problems.join("\n  "));
  process.exit(1);
}

const banner = "// Auto-generated content bank — edit content/raw/ and run tools/generate.mjs.";
const emit = (name, type, data) =>
  `${banner}\nimport type { ${type} } from "./types";\n\n` +
  `export const ${name}: ${type}[] = ${JSON.stringify(data, null, 2)};\n`;

writeFileSync(join(OUT, "drills.ts"), emit("DRILLS", "Drill", drills));
writeFileSync(join(OUT, "vocab.ts"), emit("VOCAB", "VocabItem", vocab));
console.log(`OK — ${drills.length} drills, ${vocab.length} vocab items`);
