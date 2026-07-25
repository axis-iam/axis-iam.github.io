import {access, readFile} from 'node:fs/promises';

type Manifest = {schemaVersion: number; routes: Array<{key: string; path: string; product: string; status: string}>};
async function main() {
  const manifest = JSON.parse(await readFile('static/route-manifest.json', 'utf8')) as Manifest;
  if (manifest.schemaVersion !== 1) throw new Error('Unsupported route manifest schema.');

  for (const route of manifest.routes) {
    for (const locale of ['en', 'zh-CN'] as const) {
      const prefix = locale === 'en' ? 'build' : 'build/zh-CN';
      const output = route.path === '/' ? `${prefix}/index.html` : `${prefix}${route.path}index.html`;
      await access(output).catch(() => { throw new Error(`Missing ${locale} built route ${route.key}: ${output}`); });
      const html = await readFile(output, 'utf8');
      if (!html.includes('Axis Vertex')) throw new Error(`${locale} route lacks Vertex identity: ${route.path}`);
      if (!new RegExp(`<html lang=(?:"${locale}"|${locale})(?:\\s|>)`).test(html)) throw new Error(`${locale} route has the wrong document language: ${route.path}`);
      if (locale === 'zh-CN' && !/[\u3400-\u9fff]/u.test(html)) throw new Error(`Chinese route lacks translated content: ${route.path}`);
    }
  }

  const builtManifest = JSON.parse(await readFile('build/route-manifest.json', 'utf8')) as Manifest;
  if (JSON.stringify(builtManifest) !== JSON.stringify(manifest)) throw new Error('Built route manifest differs from source manifest.');
  const localizedManifest = JSON.parse(await readFile('build/zh-CN/route-manifest.json', 'utf8')) as Manifest;
  if (JSON.stringify(localizedManifest) !== JSON.stringify(manifest)) throw new Error('Localized built route manifest differs from source manifest.');
  console.log(`Validated ${manifest.routes.length} routes in English and Chinese.`);
}

void main();
