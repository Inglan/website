"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Entry from "./entry";

export function Entries(props: {
  preloadedEntries: Preloaded<typeof api.guestbook.get>;
}) {
  const entries = usePreloadedQuery(props.preloadedEntries);

  return (
    <>
      {entries &&
        entries?.map((entry) => <Entry entry={entry} key={entry.id} />)}
    </>
  );
}
