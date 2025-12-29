import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  guestbookEntries: defineTable({
    userId: v.string(),
    message: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("deleted"),
    ),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_status_user", ["status", "userId"]),

  networkIncidents: defineTable({
    ip: v.optional(v.string()),
    source: v.union(
      v.literal("intrusionPrevention"),
      v.literal("directIpAccess"),
    ),
    details: v.string(),
    rawData: v.string(),
  }),
});
