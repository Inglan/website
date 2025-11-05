import Link from "next/link";

export default function PostCard({
  title,
  slug,
  date,
  excerpt,
}: {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="border-b border-dashed p-4 flex flex-col last:border-b-0 hover:bg-card active:brightness-75 duration-300 ease-out"
    >
      <h1 className="text-2xl">{title}</h1>
      <p className="text-foreground/75">{date}</p>
      <p className="line-clamp-3">{excerpt}</p>
    </Link>
  );
}
