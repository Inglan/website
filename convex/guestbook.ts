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
      status: user.role === "admin" ? "approved" : "pending",
    });
  },
});

export const get = query({
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    const entries = await ctx.db
      .query("guestbookEntries")
      .withIndex("by_status", (q) => q.eq("status", "approved"))
      .collect();
    if (user) {
      entries.push(
        ...(await ctx.db
          .query("guestbookEntries")
          .withIndex("by_status_user", (q) =>
            q.eq("status", "pending").eq("userId", user._id),
          )
          .collect()),
      );
    }

    return (
      await Promise.all(
        entries.map(async (entry) => ({
          id: entry._id,
          message: entry.message,
          name: (await authComponent.getAnyUserById(ctx, entry.userId))?.name,
          creationTime: entry._creationTime,
          status: entry.status,
          userId: entry.userId,
        })),
      )
    ).reverse();
  },
});

export const deleteEntry = mutation({
  args: {
    id: v.id("guestbookEntries"),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    if (user === null) {
      throw new Error("Unauthorized");
    }
    const entry = await ctx.db.get("guestbookEntries", args.id);
    if (!entry) {
      throw new Error("Entry not found");
    }
    if (entry.userId !== user._id) {
      throw new Error("Unauthorized");
    }
    await ctx.db.patch(args.id, { status: "deleted" });
  },
});
