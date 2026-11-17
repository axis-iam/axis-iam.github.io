import {execFileSync} from 'node:child_process';
import {mkdirSync, readFileSync, writeFileSync, existsSync, rmSync} from 'node:fs';
import {resolve} from 'node:path';

const destination = resolve(process.argv[2] ?? '');
if (!process.argv[2] || existsSync(destination)) throw new Error('Provide a new directory for SDK source snapshots.');
const revisions = JSON.parse(readFileSync('static/source-revisions.json', 'utf8')).sources;
const sources = [
  ['vertexSdkJavaScript', 'sdk-js', 'vertex-sdk-js'],
  ['vertexSdkJava', 'sdk-java', 'vertex-sdk-java'],
  ['vertexSdkGo', 'sdk-go', 'vertex-sdk-go'],
  ['vertexSdkPython', 'sdk-python', 'vertex-sdk-python'],
];
mkdirSync(destination, {recursive: true});
for (const [key, directory, repository] of sources) {
  const revision = revisions[key];
  let checkout;
  if (process.env.VERTEX_SOURCE_ROOT) {
    checkout = resolve(process.env.VERTEX_SOURCE_ROOT, 'sdk', directory);
  } else {
    checkout = resolve(destination, `.clone-${directory}`);
    execFileSync('git', ['clone', '--filter=blob:none', '--no-checkout', `https://github.com/axis-iam/${repository}.git`, checkout], {stdio: 'inherit'});
  }
  const actual = execFileSync('git', ['-C', checkout, 'rev-parse', `${revision}^{commit}`], {encoding: 'utf8'}).trim();
  if (actual !== revision) throw new Error(`Missing pinned revision for ${repository}.`);
  const target = resolve(destination, 'sdk', directory);
  mkdirSync(target, {recursive: true});
  const archive = execFileSync('git', ['-C', checkout, 'archive', revision], {maxBuffer: 100 * 1024 * 1024});
  execFileSync('tar', ['-x', '-C', target], {input: archive});
  if (!process.env.VERTEX_SOURCE_ROOT) rmSync(checkout, {recursive: true});
  console.log(`Prepared ${repository} at ${revision}.`);
}
writeFileSync(resolve(destination, 'revisions.json'), `${JSON.stringify(revisions, null, 2)}\n`);
