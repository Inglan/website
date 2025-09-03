import { Tag } from "lucide-react";
import { defineField, defineType } from "sanity";

export const projectTagType = defineType({
  name: "projectTag",
  title: "Project Tag",
  type: "document",
  icon: Tag,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
  ],
});
