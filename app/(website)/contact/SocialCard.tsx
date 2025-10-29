import clsx from "clsx";
import Link from "next/link";

interface SocialCardProps {
  name: string;
  username: string;
  link: string;
  unimportant?: boolean;
}

export default function SocialCard({
  name,
  username,
  link,
  unimportant = false,
}: SocialCardProps) {
  return (
    <div>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 border-b border-r border-dashed hover:bg-card flex flex-col"
      >
        <div
          className={clsx(
            "text-2xl inline-flex gap-2 items-center",
            unimportant && "text-foreground/50",
          )}
        >
          {name}
        </div>
        <div
          className={clsx(
            "text-xl inline-flex gap-2 items-center",
            unimportant && "text-foreground/50",
          )}
        >
          {username}
        </div>
      </Link>
    </div>
  );
}
