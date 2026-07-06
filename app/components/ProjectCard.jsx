import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  href,
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={800}
        className="h-[225px] lg:h-[450px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 p-6 text-white translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-200">{description}</p>
      </div>
    </Link>
  );
}