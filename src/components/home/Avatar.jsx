import Image from "next/image";

export default function Avatar({ src, alt }) {
  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
      <Image
        src={src ?? "/defaultAvatar.png"}
        alt={alt}
        width={100}
        height={100}
      />
    </div>
  );
}
