import clsx from "clsx";
import Link from "next/link";

interface ContactMethodCardProps {
  title: string;
  subtitle: string;
  url: string;
  preferred?: boolean;
}

export default function ContactMethodCard({
  title,
  subtitle,
  url,
  preferred = false,
}: ContactMethodCardProps) {
  return (
    <div className={clsx(preferred && "col-span-2")}>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 border-b border-r border-dashed hover:bg-card flex flex-col"
      >
        <div className="text-2xl inline-flex gap-2 items-center">
          {title}
        </div>
        <div className="text-xl inline-flex gap-2 items-center">
          {subtitle}
        </div>
      </Link>
    </div>
  );
}
