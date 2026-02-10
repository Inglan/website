import { cn } from "@/lib/utils";

function HackatimeSkeleton() {
  const quickStats = [
    {
      title: "Total Coding Time",
      className: "col-span-14 bg-striped-gradient bg-size-[80px_80px]",
    },
    {
      title: "This Week",
      className: "col-span-9",
    },
    {
      title: "Today",
      className: "col-span-9",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-32 border-l border-dashed">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              stat.className,
              "p-4 flex flex-col border-r border-dashed border-b h-28 items-center justify-center",
            )}
          >
            <div className="h-9 w-32 bg-muted rounded mb-2"></div>
            <div className="h-4 w-24 bg-muted rounded"></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-dashed">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row border-r border-b border-dashed items-center"
          >
            <div className="size-14 flex justify-center items-center text-xl border-r border-dashed z-10 aspect-square bg-card">
              <div className="h-6 w-6 bg-muted rounded"></div>
            </div>
            <div className="w-full flex flex-row relative p-4">
              <div className="h-5 w-24 bg-muted rounded"></div>
              <div className="grow"></div>
              <div className="h-5 w-16 bg-muted rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hackatime() {
  return HackatimeSkeleton;
}
