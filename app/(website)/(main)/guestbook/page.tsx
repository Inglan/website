"use server";

import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Entries } from "./entries";
import Page from "./content";

export async function PageWrapper() {
  const preloadedEntries = await preloadQuery(api.guestbook.get, {});
  return (
    <>
      <Page preloadedEntries={preloadedEntries} />
    </>
  );
}
