import {readFile} from 'node:fs/promises';

const packageBase = 'https://vertex-packages.chaosguide.com/releases/0.1.0';
const javascriptCore = `${packageBase}/js/axis-iam-vertex-0.1.0.tgz`;
const javascriptCommands = ['react', 'express', 'nestjs'].map(
  (framework) => `npm install ${javascriptCore} ${packageBase}/js/axis-iam-vertex-${framework}-0.1.0.tgz`,
);
const javaRepository = `${packageBase}/maven`;
const javaCoordinate = 'com.chaosguide.iam:vertex-sdk-core:0.1.0';
const pythonWheel = `${packageBase}/python/axis_iam_vertex-0.1.0-py3-none-any.whl`;
const goRoot = 'github.com/axis-iam/vertex-sdk-go';
const goCommands = [
  `go get ${goRoot}@v0.1.1`,
  ...['chi', 'gin', 'echo'].map((adapter) => `go get ${goRoot}@v0.1.1 ${goRoot}/${adapter}@v0.1.1`),
];
const expectedSdkRevisions = {
  vertexSdkJavaScript: '7a9ed9042e1ba71c17f4df98f620f9cb1b5658c4',
  vertexSdkJava: '7ce1dc015700367d4c7b8314dcd317f048a8f5f8',
  vertexSdkGo: '617be864cf05a8d9262a56c754a99f143b2b6c07',
  vertexSdkPython: '2840f2b711f2362a3e2cc559686484d8eddd052f',
} as const;

const sdkDocuments = (sdk: string) => [
  `docs/sdk/${sdk}/index.mdx`,
  `i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/${sdk}/index.mdx`,
];

async function requireText(paths: string[], values: string[]) {
  for (const path of paths) {
    const text = await readFile(path, 'utf8');
    for (const value of values) if (!text.includes(value)) throw new Error(`${path} is missing exact SDK installation contract: ${value}`);
  }
}

async function main() {
  await requireText(sdkDocuments('javascript'), javascriptCommands);
  await requireText(sdkDocuments('java'), [javaRepository, javaCoordinate]);
  await requireText(sdkDocuments('python'), [pythonWheel, 'axis-iam-vertex', 'axis_vertex']);
  await requireText(sdkDocuments('go'), goCommands);

  const publicDocuments = (await Promise.all(
    ['javascript', 'java', 'python', 'go'].flatMap(sdkDocuments).map((path) => readFile(path, 'utf8')),
  )).join('\n');
  const forbiddenDocumentPatterns = [
    {name: 'bare npm package installation', pattern: /npm install\s+@axis-iam\//},
    {name: 'bare Python distribution installation', pattern: /pip install\s+["']?axis-iam-vertex(?:\[|\s|$)/},
    {name: 'retired Go version', pattern: new RegExp(['v0', '1', '0'].join('\\.'))},
    {name: 'unfixed Go version', pattern: new RegExp(`github\\.com/axis-iam/vertex-sdk-go(?:/(?:chi|gin|echo))?@${['lat', 'est'].join('')}`)},
    {name: 'local package fallback', pattern: /(?:file|workspace|link):|VERTEX_SOURCE_ROOT|\/home\/|\breplace\s+github\.com\/axis-iam\/vertex-sdk/},
  ];
  for (const rule of forbiddenDocumentPatterns) if (rule.pattern.test(publicDocuments)) throw new Error(`${rule.name} found in public SDK pages.`);

  const revisions = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {
    sources: Record<string, string>;
  };
  for (const [name, expected] of Object.entries(expectedSdkRevisions)) {
    if (revisions.sources[name] !== expected) throw new Error(`${name} must be recorded at ${expected}.`);
  }

  const automationPaths = [
    '.github/workflows/ci.yml',
    '.github/workflows/deploy-pages.yml',
    'package.json',
    'scripts/check-public-installations.sh',
    'tests/public-install/javascript/package.json',
    'tests/public-install/java/settings.gradle.kts',
    'tests/public-install/java/build.gradle.kts',
    'tests/public-install/go/go.mod',
  ];
  const automation = (await Promise.all(automationPaths.map((path) => readFile(path, 'utf8')))).join('\n');
  for (const pattern of [/(?:file|workspace|link):/, /\/home\//, /iam-java/, /\breplace\b/, /ghp_[A-Za-z0-9]+/, /VERTEX_SOURCE_ROOT/]) {
    if (pattern.test(automation)) throw new Error(`Private source or local fallback found in public installation automation: ${pattern}`);
  }
  if (!automation.includes('env -u GOPRIVATE -u GONOSUMDB')) throw new Error('Go public consumer must clear private module environment overrides.');

  console.log('Validated bilingual SDK installation commands, exact public versions, registry boundaries, and public-only automation.');
}

void main();
