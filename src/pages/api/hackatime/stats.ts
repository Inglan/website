import type { APIRoute } from "astro";
import { DateTime } from "luxon";

export const GET = (async () => {
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
      value: allTimeStats.data.human_readable_total.replace(/\s*\d+s$/, ""),
      className: "col-span-14 bg-striped-gradient bg-size-[80px_80px]",
    },
    {
      title: "This Week",
      value: weekStatsData.data.human_readable_total.replace(/\s*\d+s$/, ""),
      className: "col-span-9",
    },
    {
      title: "Today",
      value: dayStatsData.data.human_readable_total.replace(/\s*\d+s$/, ""),
      className: "col-span-9",
    },
  ];
  return new Response(JSON.stringify({ quickStats, allTimeStats }));
}) satisfies APIRoute;
