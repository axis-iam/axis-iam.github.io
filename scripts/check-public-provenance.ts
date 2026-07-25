import {readFile} from 'node:fs/promises';

const sourceNames = [
  'vertexBackend',
  'vertexPortal',
  'vertexAdmin',
  'vertexSdkJavaScript',
  'vertexSdkJava',
  'vertexSdkGo',
  'vertexSdkPython',
];

async function main() {
  const value = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {
    schemaVersion: number;
    generatedAt: string;
    sources: Record<string, unknown>;
  };
  if (value.schemaVersion !== 1 || !/^\d{4}-\d{2}-\d{2}$/.test(value.generatedAt)) throw new Error('Invalid public source provenance schema.');
  if (JSON.stringify(Object.keys(value.sources).sort()) !== JSON.stringify([...sourceNames].sort())) throw new Error('Public source provenance has an unexpected source inventory.');
  for (const name of sourceNames) if (typeof value.sources[name] !== 'string' || !/^[0-9a-f]{40}$/.test(value.sources[name])) throw new Error(`Invalid revision for ${name}.`);
  console.log('Validated seven committed source revisions without accessing private repositories.');
}

void main();
