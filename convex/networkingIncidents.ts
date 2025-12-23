import { v } from "convex/values";
import { httpAction, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const createIncidentFromIPS = httpAction(async (ctx, request) => {
  await ctx.runMutation(internal.networkingIncidents.createIncident, {
    source: "intrusionPrevention",
    rawData: JSON.stringify(request.json()),
  });
  return new Response("yes", { status: 200 });
});

export const createIncident = internalMutation({
  args: {
    source: v.union(
      v.literal("intrusionPrevention"),
      v.literal("directIpAccess"),
    ),
    rawData: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("networkIncidents", {
      source: args.source,
      rawData: args.rawData,
    });
  },
});
