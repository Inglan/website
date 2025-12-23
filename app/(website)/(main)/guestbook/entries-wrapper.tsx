"use server";

import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function EntriesWrapper() {
  const preloadedEntries = await preloadQuery(api.guestbook.get, {});
  return <></>;
}
