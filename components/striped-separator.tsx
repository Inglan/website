import { cn } from "@/lib/utils";

export function StripedSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full mx-auto max-w-4xl border-x border-dashed h-10 bg-striped-gradient bg-size-[80px_80px] border-b",
        className,
      )}
    ></div>
  );
}
