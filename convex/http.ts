import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./auth";
import { createIncidentFromIPS } from "./networkingIncidents";

const http = httpRouter();

authComponent.registerRoutes(http, createAuth);

http.route({
  path: `/webhook/${process.env.WEBHOOK_SECRET}/networking/incidents/ips`,
  method: "POST",
  handler: createIncidentFromIPS,
});

export default http;
