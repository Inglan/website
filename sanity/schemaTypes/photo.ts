import { FileImage } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const photoType = defineType({
  name: "photo",
  title: "Photo",
  type: "document",
  icon: FileImage,
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["exif", "image"],
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "description",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "mainImage",
    },
    prepare(selection) {
      const { description } = selection;
      return { ...selection, subtitle: description };
    },
  },
});
