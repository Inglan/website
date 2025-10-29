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
    <LinkCard href={url} span={preferred}>
      <div className="text-2xl inline-flex gap-2 items-center">{title}</div>
      <div className="text-xl inline-flex gap-2 items-center">{subtitle}</div>
    </LinkCard>
  );
}
