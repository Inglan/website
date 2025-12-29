import { v } from "convex/values";
import { httpAction, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { networkIncidents } from "./schema";

export const createIncidentFromIPS = httpAction(async (ctx, request) => {
  const body = await request.json();
  await ctx.runMutation(internal.networkingIncidents.createIncident, {
    source: "intrusionPrevention",
    rawData: JSON.stringify(body),
  });
  return new Response("yes", { status: 200 });
});
export const createIncident = internalMutation({
  args: networkIncidents,
  handler: async (ctx, args) => {
    await ctx.db.insert("networkIncidents", {
      ...args,
    });
  },
});
