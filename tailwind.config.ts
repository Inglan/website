import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-foreground)",
            a: {
              color: "var(--color-primary)",
            },
            h1: {
              color: "var(--color-primary)",
              fontWeight: "bold",
            },
            h2: {
              color: "var(--color-primary)",
              fontWeight: "bold",
            },
            h3: {
              color: "var(--color-primary)",
              fontWeight: "bold",
            },
            h4: {
              color: "var(--color-primary)",
              fontWeight: "bold",
            },
            h5: {
              color: "var(--color-primary)",
              fontWeight: "bold",
            },
            h6: {
              color: "var(--color-primary)",
              fontWeight: "bold",
            },
            strong: {
              color: "var(--color-foreground)",
            },
            blockquote: {
              color: "var(--color-foreground)",
              borderLeftColor: "var(--color-primary)",
            },
            code: {
              color: "var(--color-foreground)",
              backgroundColor: "var(--color-card)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
          },
        },
      },
    },
  },
} satisfies Config;
