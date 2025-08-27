import { ArrowRight } from "lucide-react";
import { defineType, defineField, SlugRule } from "sanity";

// Shared validation for our redirect slugs
const slugValidator = (rule: SlugRule) =>
  rule.required().custom((value) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a /";
    }
    return true;
  });

export const redirectType = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  description: "Redirect for next.config.js",
  icon: ArrowRight,
  fields: [
    defineField({
      name: "source",
      type: "slug",
      validation: (rule) => slugValidator(rule),
    }),
    defineField({
      name: "destination",
      type: "slug",
      validation: (rule) => slugValidator(rule),
    }),
    defineField({
      name: "permanent",
      type: "boolean",
    }),
  ],
  // null / false makes it temporary (307)
  initialValue: {
    permanent: true,
  },
  preview: {
    select: {
      source: "source.current",
      destination: "destination.current",
      permanent: "permanent",
    },
    prepare({ source, destination, permanent }) {
      return {
        title: `Redirect ${source} to ${destination}`,
        subtitle: permanent ? "Permanent" : "Temporary",
      };
    },
  },
});
