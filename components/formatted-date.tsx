"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function FormattedDate({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState(date);

  useEffect(() => {
    setFormattedDate(
      DateTime.fromISO(date)
        .setZone("local")
        .toLocaleString(DateTime.DATE_FULL),
    );
  }, [date]);

  return <span suppressHydrationWarning>{formattedDate}</span>;
}
