import { ArrowRight } from "lucide-react";
import { defineField, defineType } from "sanity";

export const redirectType = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  icon: ArrowRight,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "from",
      type: "text",
    }),
    defineField({
      name: "to",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
      from: "from",
      to: "to",
    },
    prepare({ title, from, to }) {
      return {
        title: `Redirect from ${from} to ${to}`,
        subtitle: title,
      };
    },
  },
});
