import type { Photo as PhotoType } from "@/lib/photos";

/** Eigen foto. width/height zijn de native maten; we schalen niet op. */
export default function Photo({
  photo,
  className = "",
  sizes,
}: {
  photo: PhotoType;
  className?: string;
  sizes?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
