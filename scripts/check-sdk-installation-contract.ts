import {readFile} from 'node:fs/promises';

async function main() {
const revisions = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {sources: Record<string, string>};
const requirements = {
  javascript: [revisions.sources.vertexSdkJavaScript, 'git clone https://github.com/axis-iam/vertex-sdk-js.git', 'pnpm install --frozen-lockfile', 'pnpm --filter @axis-iam/vertex-react... build', 'pnpm --dir packages/core pack --out ../../artifacts/vertex-core.tgz', 'npm install ../vertex-sdk-js/artifacts/vertex-core.tgz ../vertex-sdk-js/artifacts/vertex-react.tgz'],
  java: [revisions.sources.vertexSdkJava, ':vertex-sdk-core:publishToMavenLocal', 'mavenLocal()', 'includeGroup("com.chaosguide.iam")', 'com.chaosguide.iam:vertex-sdk-core:0.1.0', 'resource-audience: ${IAM_RESOURCE_AUDIENCE}'],
  python: [`axis-iam-vertex[fastapi] @ git+https://github.com/axis-iam/vertex-sdk-python.git@${revisions.sources.vertexSdkPython}`, 'axis_vertex'],
  go: ['', '/chi', '/gin', '/echo'].map((adapter) => `github.com/axis-iam/vertex-sdk-go${adapter}@v0.1.2-0.20261114111734-${revisions.sources.vertexSdkGo.slice(0, 12)}`),
};

for (const [sdk, required] of Object.entries(requirements)) {
  for (const base of ['docs', 'i18n/zh-CN/docusaurus-plugin-content-docs/current']) {
    const path = `${base}/sdk/${sdk}/index.mdx`;
    const text = await readFile(path, 'utf8');
    for (const value of required) if (!text.includes(value)) throw new Error(`${path} is missing installation contract: ${value}`);
    for (const pattern of [/vertex-packages\./, /older.*preview/i, /旧.*preview/i, /npm install\s+@axis-iam\//, /vertex-sdk-go(?:\/(?:chi|gin|echo))?@latest/]) {
      if (pattern.test(text)) throw new Error(`${path} contains an obsolete or unpinned installation instruction: ${pattern}`);
    }
  }
}
const automation = await readFile('scripts/check-public-installations.sh', 'utf8');
for (const required of ['prepare-sdk-sources.mjs', 'tsc --noEmit', 'publishToMavenLocal', 'compileJava', 'verify.py', 'go test ./...', 'env -u GOPRIVATE -u GONOSUMDB']) {
  if (!automation.includes(required)) throw new Error(`Missing real source consumer validation: ${required}`);
}
console.log('Validated bilingual pinned source installations, required audience configuration, and real SDK consumer gates.');
}

void main();
