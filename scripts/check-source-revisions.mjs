import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';

const root = process.env.VERTEX_SOURCE_ROOT ?? '../iam-java';
const expected = JSON.parse(readFileSync('static/source-revisions.json', 'utf8')).sources;
const sources = {
  vertexBackend: `${root}/axis-iam`,
  vertexPortal: `${root}/axis-iam-web/iam-portal-web`,
  vertexAdmin: `${root}/axis-iam-web/iam-admin-web`,
  vertexSdkJavaScript: `${root}/sdk/sdk-js`,
  vertexSdkJava: `${root}/sdk/sdk-java`,
  vertexSdkGo: `${root}/sdk/sdk-go`,
  vertexSdkPython: `${root}/sdk/sdk-python`,
};
const requestedNames = process.argv.slice(2);
const selectedSources = requestedNames.length
  ? Object.fromEntries(requestedNames.map((name) => {
      if (!(name in sources)) throw new Error(`Unknown source revision name: ${name}`);
      return [name, sources[name]];
    }))
  : sources;
for (const [name, path] of Object.entries(selectedSources)) {
  const actual = execFileSync('git', ['-C', path, 'rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
  if (actual !== expected[name]) throw new Error(`${name} revision mismatch: expected ${expected[name]}, got ${actual}`);
}
console.log(`${Object.keys(selectedSources).length} source revisions match the recorded provenance.`);
