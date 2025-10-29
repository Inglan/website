import { Tag } from "lucide-react";
import { defineField, defineType } from "sanity";

export const postCategoryType = defineType({
  name: "postcategory",
  title: "Post Category",
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
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
