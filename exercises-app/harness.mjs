// Rejoue toutes les chaînes de réponse contre le correcteur de l'app :
// aucune bonne réponse ne doit être refusée, aucune réponse fausse acceptée.
// Usage : node harness.mjs   (après npm run build ; nécessite playwright)
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const { chromium } = await import('playwright');

const drills = [];
for (const f of ['drills-conditionnel', 'drills-discours', 'drills-connecteurs'])
  drills.push(...JSON.parse(readFileSync(join(here, '../content/raw', `${f}.json`), 'utf8')));

// CHROMIUM_PATH overrides (utile en sandbox) ; sinon le chromium de Playwright.
const b = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const p = await b.newPage();
await p.goto(pathToFileURL(join(here, 'dist/standalone.html')).href);

const fails = [];
for (const d of drills) {
  for (const a of d.answer) {
    const r = await p.evaluate(([id, ans]) => window.__grade(id, ans), [d.id, a]);
    if (r !== 'ok') fails.push({ id: d.id, answer: a, got: r });
  }
  // a deliberately wrong answer must NOT grade ok
  const r2 = await p.evaluate(([id]) => window.__grade(id, 'zzz réponse fausse'), [d.id]);
  if (r2 === 'ok') fails.push({ id: d.id, answer: '(garbage)', got: 'FALSE POSITIVE' });
}
console.log('items:', drills.length, '| answer strings tested:', drills.reduce((n, d) => n + d.answer.length, 0));
console.log(fails.length ? fails.slice(0, 20) : 'ALL KEYS GRADE CORRECTLY');
console.log('failures:', fails.length);
await b.close();
process.exit(fails.length ? 1 : 0);
