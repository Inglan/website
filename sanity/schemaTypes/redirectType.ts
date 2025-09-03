import { ArrowRight } from "lucide-react";
import { defineType, defineField, SlugRule } from "sanity";

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
    }),
    defineField({
      name: "destination",
      type: "string",
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
      destination: "destination",
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
