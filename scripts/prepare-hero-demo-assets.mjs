import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const heroDemoDir = join(projectRoot, 'assets', 'hero-demo');
const imageExts = ['.avif', '.png', '.jpg', '.jpeg', '.webp'];

const logicalAssets = [
  {
    key: 'source',
    aliases: ['source'],
    target: 'source.avif',
    fallbackKey: null,
  },
  {
    key: 'background',
    aliases: ['bg', 'drg_bg'],
    target: 'bg.avif',
    fallbackKey: null,
  },
  {
    key: 'lighting',
    aliases: ['bg_lighting', 'bg_light'],
    target: 'bg_lighting.avif',
    fallbackKey: 'background',
  },
  {
    key: 'variation',
    aliases: ['bg_variation'],
    target: 'bg_variation.avif',
    fallbackKey: 'background',
  },
  {
    key: 'angle',
    aliases: ['angle'],
    target: 'angle.avif',
    fallbackKey: null,
  },
];

function run(command, args) {
  execFileSync(command, args, { stdio: 'inherit' });
}

function findFirstExistingFile(packDir, aliases) {
  for (const alias of aliases) {
    for (const ext of imageExts) {
      const candidate = join(packDir, `${alias}${ext}`);
      if (existsSync(candidate)) return candidate;
    }
  }

  return null;
}

function ensureFreshImage(inputPath, outputPath) {
  if (existsSync(outputPath)) {
    const outputMtime = statSync(outputPath).mtimeMs;
    const inputMtime = statSync(inputPath).mtimeMs;
    if (outputMtime >= inputMtime) return false;
  }

  const scaleFilter = "scale='if(gt(iw,1600),1600,iw)':-2:flags=lanczos";
  run('ffmpeg', [
    '-y',
    '-hide_banner',
    '-loglevel',
    'error',
    '-i',
    inputPath,
    '-vf',
    scaleFilter,
    '-frames:v',
    '1',
    '-c:v',
    'libaom-av1',
    '-still-picture',
    '1',
    '-cpu-used',
    '6',
    '-crf',
    '28',
    '-b:v',
    '0',
    '-pix_fmt',
    'yuv420p',
    outputPath,
  ]);

  return true;
}

function ensureFreshVideo(inputPath, outputPath) {
  if (existsSync(outputPath)) {
    const outputMtime = statSync(outputPath).mtimeMs;
    const inputMtime = statSync(inputPath).mtimeMs;
    if (outputMtime >= inputMtime) return false;
  }

  run('ffmpeg', [
    '-y',
    '-hide_banner',
    '-loglevel',
    'error',
    '-i',
    inputPath,
    '-an',
    '-c:v',
    'libx264',
    '-preset',
    'slow',
    '-crf',
    '19',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    outputPath,
  ]);

  return true;
}

function main() {
  mkdirSync(heroDemoDir, { recursive: true });

  const packDirs = readdirSync(heroDemoDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
    .map((entry) => entry.name)
    .sort();

  for (const packId of packDirs) {
    const packDir = join(heroDemoDir, packId);
    const resolvedInputs = new Map();

    console.log(`\n[hero-demo] ${packId}`);

    for (const assetConfig of logicalAssets) {
      let inputPath = findFirstExistingFile(packDir, assetConfig.aliases);

      if (!inputPath && assetConfig.fallbackKey) {
        inputPath = resolvedInputs.get(assetConfig.fallbackKey) || null;
      }

      if (!inputPath) {
        throw new Error(`Missing image asset for "${packId}" -> ${assetConfig.key}`);
      }

      resolvedInputs.set(assetConfig.key, inputPath);

      const outputPath = join(packDir, assetConfig.target);
      const changed = ensureFreshImage(inputPath, outputPath);
      console.log(`  ${assetConfig.target} <= ${inputPath.split('/').pop()}${changed ? ' (updated)' : ' (cached)'}`);
    }

    const videoInput = join(packDir, 'video.mp4');
    const videoOutput = join(packDir, 'video.optimized.mp4');

    if (existsSync(videoInput)) {
      const changed = ensureFreshVideo(videoInput, videoOutput);
      console.log(`  video.optimized.mp4 <= video.mp4${changed ? ' (updated)' : ' (cached)'}`);
    } else {
      console.log('  video.optimized.mp4 <= skipped (no video.mp4)');
    }
  }
}

main();
