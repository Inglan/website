import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function IPsWrapper() {
  const preloadedIPs = await preloadQuery(api.networkingIncidents.get, {});
  return <></>;
}
