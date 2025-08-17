import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

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
