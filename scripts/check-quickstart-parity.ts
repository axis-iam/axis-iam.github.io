import {readFile} from 'node:fs/promises';

const examples = [
  {sdk: 'javascript', language: 'tsx', fixture: 'tests/quickstarts/javascript/quickstart.tsx'},
  {sdk: 'java', language: 'java', fixture: 'tests/quickstarts/java/VertexSecurityConfiguration.java'},
  {sdk: 'go', language: 'go', fixture: 'tests/quickstarts/go/quickstart_test.go'},
  {sdk: 'python', language: 'python', fixture: 'tests/quickstarts/python/quickstart.py'},
] as const;
const bffExamples = [
  {sdk: 'javascript', language: 'ts', fixture: 'tests/quickstarts/javascript/bff.ts'},
  {sdk: 'javascript', language: 'tsx', fixture: 'tests/quickstarts/javascript/bff-react.tsx'},
  {sdk: 'java', language: 'java', fixture: 'tests/quickstarts/java/VertexBffConfiguration.java'},
  {sdk: 'go', language: 'go', fixture: 'tests/quickstarts/go/bff_test.go'},
  {sdk: 'python', language: 'python', fixture: 'tests/quickstarts/python/bff.py'},
] as const;

function block(document: string, language: string): string {
  const opening = `\`\`\`${language}\n`;
  const start = document.indexOf(opening);
  const end = document.indexOf('\n```', start + opening.length);
  if (start < 0 || end < 0) throw new Error(`Missing ${language} quickstart block.`);
  return `${document.slice(start + opening.length, end).trim()}\n`;
}

async function main() {
  for (const example of [...examples.map(example => ({...example, page: 'index'})),
    ...bffExamples.map(example => ({...example, page: 'bff'}))]) {
    const fixture = await readFile(example.fixture, 'utf8');
    for (const document of [
      `docs/sdk/${example.sdk}/${example.page}.mdx`,
      `i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/${example.sdk}/${example.page}.mdx`,
    ]) {
      const rendered = block(await readFile(document, 'utf8'), example.language);
      if (rendered !== fixture) throw new Error(`${document} quickstart differs from ${example.fixture}`);
    }
  }
  console.log('English and Chinese Bearer and BFF quickstarts match their compiled fixtures.');
}

void main();
