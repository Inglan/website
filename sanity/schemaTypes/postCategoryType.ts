import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postCategoryType = defineType({
  name: "postCategory",
  title: "Post Category",
  type: "document",
  icon: TagIcon,
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
