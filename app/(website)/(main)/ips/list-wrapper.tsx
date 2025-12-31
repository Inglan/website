import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import IPsList from "./list";

export async function IPsWrapper() {
  const preloadedIPs = await preloadQuery(api.networkingIncidents.get, {});
  return <IPsList preloadedIPs={preloadedIPs} />;
}
