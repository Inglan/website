import { v } from "convex/values";
import { mutation } from "./_generated/server";
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
