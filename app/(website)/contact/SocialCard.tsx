import LinkCard from "./LinkCard";
import clsx from "clsx";

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
    <LinkCard href={link}>
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
    </LinkCard>
  );
}
