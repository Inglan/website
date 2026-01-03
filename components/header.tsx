import { cn } from "@/lib/utils";

export default function Header({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "w-full mx-auto flex h-fit p-4 border-b border-dashed",
        className,
      )}
    >
      <h1 className="text-6xl text-primary font-mono">{children}</h1>
    </header>
  );
}
