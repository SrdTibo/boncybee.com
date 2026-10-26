import Image, { type ImageProps } from "next/image";
import manifest from "@/lib/images.generated.json";

export type ImageName = keyof typeof manifest;

type ImgProps = Omit<ImageProps, "src" | "width" | "height" | "placeholder" | "blurDataURL"> & {
  name: ImageName;
};

/** next/image wrapper fed by the generated manifest (intrinsic size + blur placeholder). */
export function Img({ name, alt, fill, ...rest }: ImgProps) {
  const { width, height, blurDataURL } = manifest[name];
  return (
    <Image
      src={`/img/${name}`}
      alt={alt}
      {...(fill ? { fill } : { width, height })}
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...rest}
    />
  );
}
