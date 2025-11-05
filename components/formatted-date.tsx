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

export function FormattedTime({ date }: { date: string }) {
  // Server-safe fallback (consistent SSR): ISO time only
  const [formattedTime, setFormattedTime] = useState(() =>
    DateTime.fromISO(date).setZone("Australia/Sydney").toFormat("h:mm a"),
  );

  useEffect(() => {
    // Upgrade to user's locale/timezone on client
    setFormattedTime(
      DateTime.fromISO(date)
        .setZone("local")
        .toLocaleString(DateTime.TIME_SIMPLE),
    );
  }, [date]);

  return <span>{formattedTime}</span>;
}

export function FormattedDateTime({ date }: { date: string }) {
  // Server-safe fallback (consistent SSR): ISO datetime
  const [formattedDateTime, setFormattedDateTime] = useState(() =>
    DateTime.fromISO(date)
      .setZone("Australia/Sydney")
      .toFormat("d MMMM yyyy, h:mm a"),
  );

  useEffect(() => {
    // Upgrade to user's locale/timezone on client
    setFormattedDateTime(
      DateTime.fromISO(date)
        .setZone("local")
        .toLocaleString(DateTime.DATETIME_FULL),
    );
  }, [date]);

  return <span>{formattedDateTime}</span>;
}
