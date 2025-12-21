"use client";

import { authClient } from "@/lib/auth-client";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function PosthogIdentify() {
  const session = authClient.useSession();

  useEffect(() => {
    if (session.data?.user) {
      posthog.identify(session.data?.user.id, {
        email: session.data?.user.email,
        name: session.data?.user.name,
      });
    }
  }, [session]);

  return null;
}
