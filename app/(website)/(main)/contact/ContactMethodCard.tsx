import clsx from "clsx";
import LinkCard from "./LinkCard";

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
    <LinkCard href={url} className={clsx(preferred && "bg-card")}>
      <div className="text-2xl inline-flex gap-2 items-center">
        {title} {preferred ? "(Preferred)" : ""}
      </div>
      <div className="text-xl inline-flex gap-2 items-center">{subtitle}</div>
    </LinkCard>
  );
}
