import { Tag } from "lucide-react";
import { defineField, defineType } from "sanity";

export const projectCategoryType = defineType({
  name: "projectcategory",
  title: "Project Categories",
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
