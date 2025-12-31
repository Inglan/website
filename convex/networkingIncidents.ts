import { v } from "convex/values";
import { httpAction, internalMutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { networkIncidents } from "./schema";
import { UniFiWebhookBody } from "./types";

export const createIncidentFromIPS = httpAction(async (ctx, request) => {
  const body = (await request.json()) as UniFiWebhookBody;
  if (body.severity > 7 && body.parameters.src) {
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

export const get = query({
  handler: async (ctx, args) => {
    const incidents = await ctx.db.query("networkIncidents").collect();

    const ips: {
      ip: string;
      incidents: { id: string; source: string; details: string };
    }[] = [];

    return incidents.map((incident) => ({
      id: incident._id,
      source: incident.source,
      ip: incident.ip,
      details: incident.details,
    }));
  },
});

// export const convert = internalMutation({
//   handler: async (ctx) => {
//     const incidents = await ctx.db.query("networkIncidents").collect();
//     for (const incident of incidents) {
//       await ctx.db.delete("networkIncidents", incident._id);
//       const body = JSON.parse(incident.rawData) as UniFiWebhookBody;

//       if (body.severity > 7 && body.parameters.src) {
//         ctx.db.insert("networkIncidents", {
//           source: "intrusionPrevention",
//           ip: body.parameters.src,
//           details: `${body.message}\nPolicy Name: ${body.parameters.UNIFIpolicyName}\nSignature: ${body.parameters.UNIFIipsSignature}`,
//           rawData: JSON.stringify(body),
//         });
//       }
//     }
//   },
// });
