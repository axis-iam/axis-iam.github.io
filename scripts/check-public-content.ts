import {execFile} from 'node:child_process';
import {access, readdir, readFile} from 'node:fs/promises';
import {promisify} from 'node:util';

const run = promisify(execFile);
const mode = process.argv[2];
if (mode !== 'source' && mode !== 'build') throw new Error('Usage: check-public-content.ts source|build');

const forbidden = [
  {name: 'coordination records', pattern: /docs\/(tasks|plans|prompts)\//i},
  {name: 'absolute workspace path', pattern: /\/home\/|[A-Z]:\\Users\\/i},
  {name: 'credential material', pattern: /(BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{16,}|client_secret\s*[:=]\s*["'][A-Za-z0-9_-]{16,}["'])/i},
  {name: 'obsolete SDK namespace', pattern: /@axis-iam\/sdk-(js|react|express|nestjs|java|go|python)/i},
  {name: 'excluded product content', pattern: /\blattice\b/i},
  {name: 'private endpoint family', pattern: /\/api\/v1\/internal\/|\/platform\/v1\//i},
];
const allowedBinary = /\.(ico|png|jpg|jpeg|gif|webp|woff2?)$/i;

async function buildFiles(path: string): Promise<string[]> {
  const entries = await readdir(path, {withFileTypes: true});
  return (await Promise.all(entries.map((entry) => {
    const child = `${path}/${entry.name}`;
    return entry.isDirectory() ? buildFiles(child) : [child];
  }))).flat();
}

async function sourceFiles(): Promise<string[]> {
  const {stdout} = await run('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'], {encoding: 'buffer'});
  const candidates = stdout.toString('utf8').split('\0').filter(Boolean);
  const existing = await Promise.all(candidates.map(async (file) => access(file).then(() => file, () => null)));
  return existing.filter((file): file is string => file !== null);
}

async function main() {
  const candidates = mode === 'source' ? await sourceFiles() : await buildFiles('build');
  let textFiles = 0;
  for (const file of candidates) {
    const value = await readFile(file);
    if (value.includes(0)) {
      if (!allowedBinary.test(file)) throw new Error(`Unexpected binary public-repository file: ${file}`);
      continue;
    }
    textFiles += 1;
    const rawText = value.toString('utf8');
    const text = file === 'scripts/check-public-content.ts'
      ? rawText.replace(/^\s*\{name:.*$/gm, '')
      : rawText;
    for (const rule of forbidden) if (rule.pattern.test(text)) throw new Error(`${rule.name} found in ${file}`);
  }
  console.log(`Public-content scan passed for ${textFiles} text files across ${candidates.length} ${mode} files.`);
}

void main();
