import {readdir, readFile, stat} from 'node:fs/promises';

const mode = process.argv[2];
if (mode !== 'internal' && mode !== 'external') throw new Error('Usage: check-links.ts internal|external');

async function files(path: string): Promise<string[]> {
  const info = await stat(path);
  if (info.isFile()) return [path];
  return (await Promise.all((await readdir(path)).map((child) => files(`${path}/${child}`)))).flat();
}

async function main() {
if (mode === 'internal') {
  const htmlFiles = (await files('build')).filter((file) => file.endsWith('.html'));
  const failures: string[] = [];
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = match[1];
      if (!target.startsWith('/') || target.startsWith('//')) continue;
      const clean = target.split(/[?#]/)[0];
      const local = clean.endsWith('/') ? `build${clean}index.html` : `build${clean}`;
      try { await stat(local); } catch { failures.push(`${file}: ${target}`); }
    }
  }
  if (failures.length) throw new Error(`Broken internal links:\n${failures.slice(0, 30).join('\n')}`);
  console.log(`Internal link check passed for ${htmlFiles.length} pages.`);
} else {
  const sources = (await files('docs')).filter((file) => /\.mdx?$/.test(file));
  const urls = new Set<string>();
  const probeUrls = new Map([
    [
      'https://vertex-packages.chaosguide.com/releases/0.1.0/maven',
      'https://vertex-packages.chaosguide.com/releases/0.1.0/maven/com/chaosguide/iam/vertex-sdk-core/0.1.0/vertex-sdk-core-0.1.0.pom',
    ],
  ]);
  for (const file of sources) for (const match of (await readFile(file, 'utf8')).matchAll(/https:\/\/[^\s)\]"'<>]+/g)) urls.add(match[0].replace(/\\_/g, '_').replace(/[.,;:]$/, ''));
  const failures: string[] = [];
  for (const url of urls) {
    if (/\.(example|test)\.com/.test(url)) continue;
    const probeUrl = probeUrls.get(url) ?? url;
    try {
      let response = await fetch(probeUrl, {method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(10000)});
      if (!response.ok) response = await fetch(probeUrl, {method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(10000)});
      if (!response.ok) failures.push(`${response.status} ${url}`);
    } catch (error) { failures.push(`${String(error)} ${url}`); }
  }
  if (failures.length) throw new Error(`External link failures:\n${failures.join('\n')}`);
  console.log(`External link check passed for ${urls.size} URLs (example domains skipped).`);
}
}

void main();
