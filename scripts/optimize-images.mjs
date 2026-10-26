// Generates responsive WebP variants, blur placeholders, OG image and icons
// from the source images in assets/images. Run with `npm run images`.
import sharp from "sharp";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "assets/images";
const OUT = "public/img";
// Must match images.deviceSizes + images.imageSizes in next.config.ts
const WIDTHS = [256, 384, 640, 960, 1280, 1920];

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const manifest = {};
const files = (await readdir(SRC)).filter((f) => /\.(webp|jpe?g|png)$/i.test(f)).sort();

for (const file of files) {
  const name = path.parse(file).name;
  const input = sharp(path.join(SRC, file)).rotate();
  const { width, height } = await input.metadata();

  await Promise.all(
    WIDTHS.map((w) =>
      input
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 72, effort: 6, alphaQuality: 90 })
        .toFile(path.join(OUT, `${name}-${w}.webp`)),
    ),
  );

  const blur = await input.clone().resize(12).webp({ quality: 40 }).toBuffer();
  manifest[name] = {
    width,
    height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(`✓ ${name} (${width}×${height})`);
}

// Open Graph image: square cover centred on a blurred, darkened copy of itself.
const cover = path.join(SRC, "cover.webp");
const ogBackground = await sharp(cover)
  .resize(1200, 630, { fit: "cover" })
  .blur(40)
  .grayscale()
  .modulate({ brightness: 0.45 })
  .toBuffer();
const ogCover = await sharp(cover).resize(530, 530).grayscale().toBuffer();
await sharp(ogBackground)
  .composite([{ input: ogCover, top: 50, left: 335 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/og.jpg");
console.log("✓ og.jpg");

// Favicons: white monogram on black.
const logo = path.join(SRC, "logo.webp");
for (const [size, out] of [
  [512, "src/app/icon.png"],
  [180, "src/app/apple-icon.png"],
]) {
  const mark = await sharp(logo)
    .resize(Math.round(size * 0.72), Math.round(size * 0.72), { fit: "contain", background: "#0000" })
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#050505" } })
    .composite([{ input: mark, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✓ ${out}`);
}

await writeFile(
  "src/lib/images.generated.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log("✓ src/lib/images.generated.json");
