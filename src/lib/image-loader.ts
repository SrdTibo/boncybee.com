// Static-export image loader: maps next/image requests to the
// pre-generated variants in public/img (see scripts/optimize-images.mjs).
const WIDTHS = [256, 384, 640, 960, 1280, 1920];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const w = WIDTHS.find((candidate) => candidate >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `${src}-${w}.webp`;
}
