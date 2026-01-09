import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";
import { internal } from "./_generated/api";

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
    ctx.scheduler.runAfter(0, internal.slack.send, {
      message: "Someone posted a guestbook entry go review it <@U0923H02Y3B>",
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

    if (user?.role === "admin") {
      entries.push(
        ...(await ctx.db
          .query("guestbookEntries")
          .withIndex("by_status", (q) => q.eq("status", "pending"))
          .collect()),
      );
    } else if (user) {
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
        entries.map(async (entry) => {
          const user = await authComponent.getAnyUserById(ctx, entry.userId);

          return {
            id: entry._id,
            message: entry.message,
            name: user?.name,
            creationTime: entry._creationTime,
            status: entry.status,
            userId: entry.userId,
            verified: user?.email === "me@ingo.au",
          };
        }),
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
    if (entry.userId !== user._id && user.role !== "admin") {
      throw new Error("Unauthorized");
    }
    await ctx.db.patch(args.id, { status: "deleted" });
  },
});

export const setStatus = mutation({
  args: {
    id: v.id("guestbookEntries"),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("deleted"),
    ),
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
    if (user.role !== "admin") {
      throw new Error("Unauthorized");
    }
    await ctx.db.patch(args.id, { status: args.status });
  },
});
