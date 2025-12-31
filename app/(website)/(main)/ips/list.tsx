"use client";

import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";

export default function IPsList(props: {
  preloadedIPs: Preloaded<typeof api.networkingIncidents.get>;
}) {
  const ips = usePreloadedQuery(props.preloadedIPs);

  return <>{JSON.stringify(ips)}</>;
}
