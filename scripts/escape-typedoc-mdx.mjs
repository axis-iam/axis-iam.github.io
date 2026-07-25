import {readdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';

function markdownFiles(path) {
  if (statSync(path).isFile()) return path.endsWith('.md') ? [path] : [];
  return readdirSync(path).flatMap((child) => markdownFiles(`${path}/${child}`));
}

let replacements = 0;
for (const file of markdownFiles('docs/sdk/javascript/reference/generated')) {
  let fenced = false;
  const lines = readFileSync(file, 'utf8').split('\n').map((line) => {
    if (/^\s*```/.test(line)) {
      fenced = !fenced;
      return line;
    }
    if (fenced) return line;
    return line.split(/(`[^`]*`)/g).map((part, index) => {
      if (index % 2 === 1) return part;
      return part.replace(/\{([A-Za-z_$][A-Za-z0-9_$]*)\}/g, (_match, name) => {
        replacements += 1;
        return `&#123;${name}&#125;`;
      });
    }).join('');
  });
  writeFileSync(file, lines.join('\n'));
}
console.log(`Escaped ${replacements} TypeDoc prose placeholders for MDX.`);
