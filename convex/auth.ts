import GitHub from "@auth/core/providers/github";
import { convexAuth, getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [GitHub],
  callbacks: {
    async afterUserCreatedOrUpdated(ctx, args) {
      if (args.existingUserId) return;

      const user = await ctx.db.get(args.userId);

      await ctx.db.patch(args.userId, {
        role: "read",
        displayName: user.name || "",
      });
    },
  },
});

export const getMe = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const user = await ctx.db.get(userId);
    return {
      name: user?.name || "Unknown",
      email: user?.email || "unknown",
      role: user?.role || "read",
      img: user?.image || "",
    };
  },
});
