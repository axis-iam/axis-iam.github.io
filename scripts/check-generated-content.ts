import {readFile} from 'node:fs/promises';
import {generatedRoots, inventory} from './generated-content.js';

type Manifest = {
  schemaVersion: number;
  product: string;
  algorithm: string;
  roots: readonly string[];
  files: Array<{path: string; bytes: number; sha256: string}>;
  sources: Record<string, string>;
};

async function main() {
  const manifest = JSON.parse(await readFile('static/generated-content-manifest.json', 'utf8')) as Manifest;
  if (manifest.schemaVersion !== 1 || manifest.product !== 'vertex' || manifest.algorithm !== 'sha256') {
    throw new Error('Unsupported generated-content manifest.');
  }
  if (JSON.stringify(manifest.roots) !== JSON.stringify(generatedRoots)) throw new Error('Generated reference roots differ from the public contract.');
  const provenance = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {sources: Record<string, string>};
  if (JSON.stringify(manifest.sources) !== JSON.stringify(provenance.sources)) throw new Error('Generated references and source provenance differ.');
  const actual = await inventory();
  if (JSON.stringify(manifest.files) !== JSON.stringify(actual)) throw new Error('Generated reference inventory or checksum mismatch. Run the private source refresh.');
  console.log(`Validated checksums for ${actual.length} committed generated reference files.`);
}

void main();
