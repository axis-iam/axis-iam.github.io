import {execFileSync} from 'node:child_process';
import {readFileSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';

const root = process.env.VERTEX_SOURCE_ROOT ?? '../iam-java';
const jsRoot = `${root}/sdk/sdk-js`;
for (const pkg of ['core', 'react', 'express', 'nestjs', 'codegen', 'test']) {
  const json = JSON.parse(readFileSync(`${jsRoot}/packages/${pkg}/package.json`, 'utf8'));
  for (const entry of Object.keys(json.exports ?? {'.': true})) {
    const source = entry === '.' ? 'src/index.ts' : `src/${entry.slice(2)}.ts`;
    if (!existsSync(`${jsRoot}/packages/${pkg}/${source}`)) throw new Error(`Missing JS public entry source: ${json.name} ${entry}`);
  }
}

const goRoot = `${root}/sdk/sdk-go`;
const packages = execFileSync('go', ['list', './...'], {cwd: goRoot, env: {...process.env, GOTOOLCHAIN: 'go1.23.0', GOPROXY: 'off'}, encoding: 'utf8'}).trim().split('\n');
const goReference = readFileSync('docs/sdk/go/reference/index.mdx', 'utf8');
for (const pkg of packages) if (!goReference.includes(`## ${pkg}`)) throw new Error(`Go package missing from reference: ${pkg}`);

const pythonRoot = `${root}/sdk/sdk-python`;
const initFile = resolve(`${pythonRoot}/src/axis_vertex/__init__.py`);
const publicNames = JSON.parse(execFileSync('python3', ['-c', 'import ast,json,sys; tree=ast.parse(open(sys.argv[1], encoding="utf8").read()); value=next(n.value for n in tree.body if isinstance(n, ast.Assign) and any(isinstance(t, ast.Name) and t.id == "__all__" for t in n.targets)); print(json.dumps(ast.literal_eval(value)))', initFile], {encoding: 'utf8'}));
const pythonReference = readFileSync('docs/sdk/python/reference/index.mdx', 'utf8');
for (const name of publicNames) if (!pythonReference.includes(name)) throw new Error(`Python public export missing from reference: ${name}`);
console.log(`SDK public-export boundaries passed (${packages.length} Go packages, ${publicNames.length} Python exports).`);
