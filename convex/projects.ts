import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import Showdown from "showdown";

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_show", (q) => q.eq("show", true))
      .order("desc")
      .paginate(args.paginationOpts);
    return projects;
  },
});

export const get = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    const project = await ctx.db
      .query("projects")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    if (!project) throw new Error("Project not found");
    let converter = new Showdown.Converter();
    const contenthtml = converter.makeHtml(project.content || "");
    return { ...project, contenthtml };
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

export const update = mutation({
  args: {
    id: v.id("projects"),
    name: v.string(),
    description: v.optional(v.string()),
    content: v.optional(v.string()),
    show: v.optional(v.boolean()),
    links: v.optional(
      v.array(
        v.object({
          title: v.string(),
          url: v.string(),
        }),
      ),
    ),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const user = await ctx.db.get(userId);

    if (user?.role == "write") {
      const project = await ctx.db.get(args.id);

      if (!project) throw new Error("Project not found");

      await ctx.db.patch(args.id, {
        name: args.name,
        description: args.description,
        content: args.content,
        show: args.show,
        links: args.links,
        tags: args.tags,
      });
    } else {
      throw new Error("Unauthorized");
    }
  },
});
