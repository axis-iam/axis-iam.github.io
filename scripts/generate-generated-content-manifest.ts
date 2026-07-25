import {readFile, writeFile} from 'node:fs/promises';
import {generatedRoots, inventory} from './generated-content.js';

async function main() {
  const provenance = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {
    generatedAt: string;
    sources: Record<string, string>;
  };
  const files = await inventory();
  const manifest = {
    schemaVersion: 1,
    product: 'vertex',
    algorithm: 'sha256',
    generatedAt: provenance.generatedAt,
    sources: provenance.sources,
    roots: generatedRoots,
    files,
  };
  await writeFile('static/generated-content-manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Recorded checksums for ${files.length} generated reference files.`);
}

void main();
