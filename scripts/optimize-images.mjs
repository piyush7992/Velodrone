import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.resolve('src', 'assets');
const outDir = path.resolve('public', 'assets');

await fs.mkdir(outDir, { recursive: true });

const files = await fs.readdir(srcDir);
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const srcPath = path.join(srcDir, file);
  try {
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const img = sharp(srcPath);
      // WebP
      await img
        .clone()
        .webp({ quality: 80 })
        .toFile(path.join(outDir, `${base}.webp`));
      // AVIF
      await img
        .clone()
        .avif({ quality: 60 })
        .toFile(path.join(outDir, `${base}.avif`));
      // Also copy original optimized PNG (resaved)
      await img
        .clone()
        .png({ quality: 80, compressionLevel: 8 })
        .toFile(path.join(outDir, `${base}.png`));
      console.log('Optimized', file);
    } else {
      // Copy other files as-is (svg, etc.)
      await fs.copyFile(srcPath, path.join(outDir, file));
    }
  } catch (e) {
    console.error('Failed optimizing', file, e.message);
  }
}

console.log('Image optimization complete.');
