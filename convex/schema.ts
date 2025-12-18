import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  guestbookEntries: defineTable({
    userId: v.string(),
    message: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected"),
    ),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_status_user", ["status", "userId"]),
});
