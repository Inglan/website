import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  projects: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    content: v.optional(v.string()),
    links: v.optional(
      v.array(
        v.object({
          title: v.string(),
          url: v.string(),
        }),
      ),
    ),
    tags: v.optional(v.array(v.string())),
    images: v.optional(v.array(v.id("_storage"))),
  }),
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    images: v.optional(v.array(v.id("_storage"))),
  }),

  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.float64()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.float64()),
    isAnonymous: v.optional(v.boolean()),
    displayName: v.optional(v.string()),

    /*
     * must be optional because OAuth providers don't return a role
     */
    role: v.optional(v.union(v.literal("read"), v.literal("write"))),
  })
    .index("email", ["email"])
    .index("phone", ["phone"]),
});

export default schema;
