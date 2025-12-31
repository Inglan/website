import { v } from "convex/values";
import { httpAction, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { networkIncidents } from "./schema";
import { UniFiWebhookBody } from "./types";

export const createIncidentFromIPS = httpAction(async (ctx, request) => {
  const body = (await request.json()) as UniFiWebhookBody;
  if (body.severity > 7) {
    await ctx.runMutation(internal.networkingIncidents.createIncident, {
      source: "intrusionPrevention",
      ip: body.parameters.src,
      details: `${body.message}\nPolicy Name: ${body.parameters.UNIFIpolicyName}\nSignature: ${body.parameters.UNIFIipsSignature}`,
      rawData: JSON.stringify(body),
    });
  }
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
