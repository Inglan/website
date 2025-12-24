import { cn } from "@/lib/utils";
import { DateTime } from "luxon";

export default async function Hackatime() {
  const allTimeStatsRequest = await fetch(
    "https://hackatime.hackclub.com/api/v1/users/ingo/stats",
  );
  const allTimeStats = await allTimeStatsRequest.json();

  // I hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones i hate timezones
  const startOfToday = DateTime.now()
    .setZone("Australia/Sydney")
    .startOf("day")
    .toUTC()
    .toISO();

  const endOfToday = DateTime.now()
    .setZone("Australia/Sydney")
    .startOf("day")
    .plus({ hours: 24 })
    .toUTC()
    .toISO();

  const date7DaysAgo = DateTime.now()
    .setZone("Australia/Sydney")
    .startOf("day")
    .minus({ days: 6 })
    .toUTC()
    .toISO();

  const dayStats = await fetch(
    `https://hackatime.hackclub.com/api/v1/users/ingo/stats?start_date=${startOfToday}&end_date=${endOfToday}`,
  );
  const dayStatsData = await dayStats.json();

  const weekStats = await fetch(
    `https://hackatime.hackclub.com/api/v1/users/ingo/stats?start_date=${date7DaysAgo}&end_date=${endOfToday}`,
  );
  const weekStatsData = await weekStats.json();

  const quickStats = [
    {
      title: "Total Coding Time",
      value: allTimeStats.data.human_readable_total,
      className: "col-span-14 bg-striped-gradient bg-size-[80px_80px]",
    },
    {
      title: "This Week",
      value: weekStatsData.data.human_readable_total,
      className: "col-span-9",
    },
    {
      title: "Today",
      value: dayStatsData.data.human_readable_total,
      className: "col-span-9",
    },
  ];
  return (
    <div className="w-full mx-auto max-w-4xl">
      <div className="grid grid-cols-32 border-l border-dashed border-b">
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
      <div className="grid grid-cols-2 border-l border-dashed">
        {allTimeStats.data.languages.map(
          (
            lang: {
              name: string;
              total_seconds: number;
              text: string;
              hours: number;
              minutes: number;
              percent: number;
              digital: string;
            },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-row border-r border-b border-dashed gap-2 items-center"
            >
              <div className="size-14 bg-striped-gradient bg-size-[80px_80px] flex justify-center items-center text-xl border-r border-dashed">
                {index + 1}
              </div>
              <div>{lang.name}</div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
