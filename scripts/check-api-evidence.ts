import {readFile} from 'node:fs/promises';
import {publicApiFamilies} from '../src/apiFamilies.js';

type Evidence = {schemaVersion: number; product: string; entries: Array<{path: string; source: string; revision: string; evidenceKind: string; symbol: string}>};

async function main() {
  const expectedManifest = {schemaVersion: 1, product: 'vertex', families: publicApiFamilies};
  const committedManifest = JSON.parse(await readFile('static/api/public-api-families.json', 'utf8'));
  if (JSON.stringify(committedManifest) !== JSON.stringify(expectedManifest)) throw new Error('Committed API family manifest differs from src/apiFamilies.ts.');

  const provenance = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {sources: Record<string, string>};
  const evidence = JSON.parse(await readFile('static/api/public-api-evidence.json', 'utf8')) as Evidence;
  if (evidence.schemaVersion !== 1 || evidence.product !== 'vertex') throw new Error('Unsupported public API evidence manifest.');
  const paths = publicApiFamilies.flatMap((family) => family.paths);
  if (JSON.stringify(evidence.entries.map((entry) => entry.path)) !== JSON.stringify(paths)) throw new Error('API evidence path inventory differs from the public API manifest.');
  for (const entry of evidence.entries) {
    if (provenance.sources[entry.source] !== entry.revision) throw new Error(`API evidence revision mismatch for ${entry.path}.`);
    if (!['controller', 'security-config', 'protocol-integration-test'].includes(entry.evidenceKind) || !/^[A-Za-z][A-Za-z0-9]+$/.test(entry.symbol)) throw new Error(`Invalid API evidence descriptor for ${entry.path}.`);
  }
  console.log(`Validated ${paths.length} committed API paths and sanitized evidence records.`);
}

void main();
