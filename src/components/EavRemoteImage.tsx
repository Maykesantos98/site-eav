import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

/** Imagem remota do eav7.com (domínio liberado em next.config). */
export function EavRemoteImage({ src, alt, className, ...rest }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
      {...rest}
    />
  );
}
