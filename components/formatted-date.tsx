"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const FORMATS = {
  DATE: "d MMM yyyy",
  TIME: "h:mm a",
  DATETIME: "d MMM yyyy, h:mm a",
};

export function FormattedDateTime({
  date,
  format,
}: {
  date: string;
  format: keyof typeof FORMATS;
}) {
  // Server side fallback
  const [formattedDateTime, setFormattedDateTime] = useState(() =>
    DateTime.fromISO(date)
      .setZone("Australia/Sydney")
      .toFormat(FORMATS[format]),
  );

  useEffect(() => {
    // Upgrade to user's timezone on client
    setFormattedDateTime(
      DateTime.fromISO(date).setZone("local").toFormat(FORMATS[format]),
    );
  }, [date, format]);

  return <span>{formattedDateTime}</span>;
}
