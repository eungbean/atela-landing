import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(projectRoot, 'dist');
const passthroughDirs = ['components', 'vendor', 'assets'];

if (!existsSync(distDir)) {
  throw new Error('Missing dist/. Run `bun run build` before `bun run prepare:deploy`.');
}

for (const dirName of passthroughDirs) {
  const sourceDir = join(projectRoot, dirName);
  const targetDir = join(distDir, dirName);

  if (!existsSync(sourceDir)) {
    throw new Error(`Missing required deploy directory: ${dirName}`);
  }

  // Preserve Vite-generated files in dist/assets, such as hashed CSS bundles.
  if (dirName !== 'assets') {
    rmSync(targetDir, { recursive: true, force: true });
  }
  cpSync(sourceDir, targetDir, { recursive: true });
  console.log(`[deploy] copied ${dirName}/ -> dist/${dirName}/`);
}
