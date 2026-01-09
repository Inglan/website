import { v } from "convex/values";
import { internalAction } from "./_generated/server";

export const send = internalAction({
  args: {
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: args.message,
      }),
    });
  },
});
