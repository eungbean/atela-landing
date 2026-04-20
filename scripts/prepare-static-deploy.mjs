import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(projectRoot, 'dist');
const passthroughDirs = ['components', 'vendor', 'assets', 'styles'];
const rootPassthroughFiles = ['favicon.svg'];

if (!existsSync(distDir)) {
  throw new Error('Missing dist/. Run `bun run build` before `bun run prepare:deploy`.');
}

for (const dirName of passthroughDirs) {
  const sourceDir = join(projectRoot, dirName);
  const targetDir = join(distDir, dirName);

  if (!existsSync(sourceDir)) {
    throw new Error(`Missing required deploy directory: ${dirName}`);
  }

  if (dirName !== 'assets') {
    rmSync(targetDir, { recursive: true, force: true });
  }
  cpSync(sourceDir, targetDir, { recursive: true });
  console.log(`[deploy] copied ${dirName}/ -> dist/${dirName}/`);
}

for (const fileName of rootPassthroughFiles) {
  const sourceFile = join(projectRoot, fileName);
  const targetFile = join(distDir, fileName);

  if (!existsSync(sourceFile)) {
    throw new Error(`Missing required deploy file: ${fileName}`);
  }

  cpSync(sourceFile, targetFile);
  console.log(`[deploy] copied ${fileName} -> dist/${fileName}`);
}

const builtIndexPath = join(distDir, 'index.html');
const builtIndex = readFileSync(builtIndexPath, 'utf8');
const normalizedIndex = builtIndex
  .replace(
    /<link rel="icon" href="\/assets\/favicon-[^"]+\.svg" type="image\/svg\+xml">/,
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">'
  )
  .replace(
    /<link rel="stylesheet" crossorigin href="\/assets\/index-[^"]+\.css">/,
    '<link rel="stylesheet" href="/styles/extensions.css">'
  )
  .replace(
    /<link rel="stylesheet" href="\/assets\/index-[^"]+\.css">/,
    '<link rel="stylesheet" href="/styles/extensions.css">'
  );

writeFileSync(builtIndexPath, normalizedIndex);
console.log('[deploy] restored stylesheet link -> /styles/extensions.css');
