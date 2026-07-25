import {createHash} from 'node:crypto';
import {readdir, readFile} from 'node:fs/promises';

export const generatedRoots = [
  'docs/sdk/javascript/reference/generated',
  'docs/sdk/go/reference',
  'docs/sdk/python/reference',
  'static/generated/sdk/java',
] as const;

async function files(path: string): Promise<string[]> {
  const entries = await readdir(path, {withFileTypes: true});
  return (await Promise.all(entries.map((entry) => {
    const child = `${path}/${entry.name}`;
    return entry.isDirectory() ? files(child) : [child];
  }))).flat();
}

export async function inventory() {
  const paths = (await Promise.all(generatedRoots.map(files))).flat().sort();
  return Promise.all(paths.map(async (path) => {
    const content = await readFile(path);
    return {path, bytes: content.byteLength, sha256: createHash('sha256').update(content).digest('hex')};
  }));
}
