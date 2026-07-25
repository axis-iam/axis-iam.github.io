import {mkdir, writeFile} from 'node:fs/promises';
import {publicApiFamilies} from '../src/apiFamilies.js';

async function main() {
  const keys = new Set<string>();
  for (const family of publicApiFamilies) {
    if (keys.has(family.key)) throw new Error(`Duplicate API family: ${family.key}`);
    if (family.paths.length === 0) throw new Error(`API family has no paths: ${family.key}`);
    keys.add(family.key);
  }

  const paths = publicApiFamilies.flatMap((family) => family.paths);
  if (new Set(paths).size !== paths.length) throw new Error('Duplicate public API path.');

  await mkdir('static/api', {recursive: true});
  await writeFile('static/api/public-api-families.json', `${JSON.stringify({schemaVersion: 1, product: 'vertex', families: publicApiFamilies}, null, 2)}\n`);
  console.log(`Generated ${publicApiFamilies.length} public API families.`);
}

void main();
