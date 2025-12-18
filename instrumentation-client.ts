import posthog from "posthog-js";

if (
  !(process.env.NODE_ENV === "development") ||
  process.env.ENABLE_INSTRUMENTATION === "true"
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/a",
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking
    debug: process.env.NODE_ENV === "development",
    person_profiles: "always",
    disable_surveys: true,
  });
}
