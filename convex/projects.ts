import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .order("desc")
      .paginate(args.paginationOpts);
    return projects;
  },
});

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const user = await ctx.db.get(userId);

    if (user?.role == "write") {
      const slug = encodeURIComponent(
        args.name.toLowerCase().replace(/\s+/g, "-"),
      );

      const id = await ctx.db.insert("projects", {
        name: args.name,
        slug,
      });
      return slug;
    } else {
      throw new Error("Unauthorized");
    }
  },
});
