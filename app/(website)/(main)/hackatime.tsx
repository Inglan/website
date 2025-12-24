import { cn } from "@/lib/utils";

export default async function Hackatime() {
  const allTimeStatsRequest = await fetch(
    "https://hackatime.hackclub.com/api/v1/users/ingo/stats",
  );
  const allTimeStats = await allTimeStatsRequest.json();

  const quickStats = [
    {
      title: "Total Coding Time",
      value: allTimeStats.data.human_readable_total,
      className: "col-span-14 bg-striped-gradient bg-size-[80px_80px]",
    },
    {
      title: "This Week",
      value: "10h 45m",
      className: "col-span-9",
    },
    {
      title: "Today",
      value: "1h 30m",
      className: "col-span-9",
    },
  ];
  return (
    <div className="w-full mx-auto border-b border-dashed max-w-4xl">
      <div className="grid grid-cols-32 border-l border-dashed">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              stat.className,
              "p-4 flex flex-col border-r border-dashed",
            )}
          >
            <div className="text-4xl text-primary">{stat.value}</div>
            <div>{stat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
