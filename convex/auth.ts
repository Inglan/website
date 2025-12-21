import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth, type BetterAuthOptions } from "better-auth";
import authConfig from "./auth.config";
import authSchema from "./betterAuth/schema";
import { admin, genericOAuth } from "better-auth/plugins";

const siteUrl = process.env.SITE_URL!;

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel, typeof authSchema>(
  components.betterAuth,
  {
    local: {
      schema: authSchema,
    },
  },
);

export const createAuthOptions = (ctx: GenericCtx<DataModel>) => {
  return {
    baseURL: siteUrl,
    database: authComponent.adapter(ctx),
    // Configure simple, non-verified email/password to get started
    emailAndPassword: {
      enabled: false,
    },
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
      discord: {
        clientId: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      },
    },
    plugins: [
      // The Convex plugin is required for Convex compatibility
      convex({ authConfig }),
      admin(),
      genericOAuth({
        config: [
          {
            providerId: "hackclub",
            clientId: process.env.HACKCLUB_CLIENT_ID!,
            clientSecret: process.env.HACKCLUB_CLIENT_SECRET!,
            discoveryUrl:
              "https://auth.hackclub.com/.well-known/openid-configuration",
            scopes: ["openid", "profile", "email", "name"],
          },
          // This was requested by someone lol
          {
            providerId: "gitdotgay",
            clientId: process.env.GITDOTGAY_CLIENT_ID!,
            clientSecret: process.env.GITDOTGAY_CLIENT_SECRET!,
            discoveryUrl: "https://git.gay/.well-known/openid-configuration",
            scopes: ["openid", "read:user"],
          },
        ],
      }),
    ],
    account: {
      accountLinking: {
        allowDifferentEmails: true,
      },
    },
  } satisfies BetterAuthOptions;
};

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth(createAuthOptions(ctx));
};

// Example function for getting the current user
// Feel free to edit, omit, etc.
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return authComponent.safeGetAuthUser(ctx);
  },
});
