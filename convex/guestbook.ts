import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const add = mutation({
  args: {
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    if (user === null) {
      throw new Error("Unauthorized");
    }
    ctx.db.insert("guestbookEntries", {
      userId: user._id,
      message: args.message,
      status: "pending",
    });
  },
});

export const get = query({
  handler: async (ctx) => {
    const entries = await ctx.db
      .query("guestbookEntries")
      .withIndex("by_status", (q) => q.eq("status", "approved"))
      .collect();
    return entries.map(async (entry) => ({
      id: entry._id,
      message: entry.message,
      name: (await authComponent.getAnyUserById(ctx, entry.userId))?.name,
    }));
  },
});
