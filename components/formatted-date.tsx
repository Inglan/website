"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function FormattedDate({ date }: { date: string }) {
  // Server-safe fallback (consistent SSR): ISO date only
  const [formattedDate, setFormattedDate] = useState(() =>
    DateTime.fromISO(date).setZone("Australia/Sydney").toFormat("d MMMM yyyy"),
  );

  useEffect(() => {
    // Upgrade to user’s locale/timezone on client
    setFormattedDate(
      DateTime.fromISO(date)
        .setZone("local")
        .toLocaleString(DateTime.DATE_FULL),
    );
  }, [date]);

  return <span>{formattedDate}</span>;
}
