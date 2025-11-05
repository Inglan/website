"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function Clock() {
  const getTime = () =>
    DateTime.now().setZone("Australia/Sydney").toFormat("hh:mm:ss a");

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <div suppressHydrationWarning>{time}</div>;
}
