import {mkdir, writeFile} from 'node:fs/promises';
import {publicRoutes} from '../src/routes.js';

async function main() {
  const keys = new Set<string>();
  const paths = new Set<string>();
  for (const route of publicRoutes) {
    if (keys.has(route.key) || paths.has(route.path)) throw new Error(`Duplicate route: ${route.key} ${route.path}`);
    if (route.product !== 'vertex' || route.status !== 'public') throw new Error(`Non-public Vertex route: ${route.key}`);
    keys.add(route.key);
    paths.add(route.path);
  }

  await mkdir('static', {recursive: true});
  await writeFile('static/route-manifest.json', `${JSON.stringify({schemaVersion: 1, routes: publicRoutes}, null, 2)}\n`);
  console.log(`Generated ${publicRoutes.length} public routes.`);
}

void main();
