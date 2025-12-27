import { preloadQuery } from "convex/nextjs";
import Page from "./content";
import { api } from "@/convex/_generated/api";

export default async function PreloadedSection() {
  const preloadedEntries = await preloadQuery(api.guestbook.get, {});
  return <Page preloadedEntries={preloadedEntries} />;
}
