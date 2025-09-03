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
    defineField({
      name: "info",
      type: "object",
      fields: [
        { name: "exposure", type: "string", title: "Exposure" },
        { name: "iso", type: "string", title: "ISO" },
        { name: "fStop", type: "string", title: "F-Stop" },
        { name: "shutterSpeed", type: "string", title: "Shutter Speed" },
        { name: "lens", type: "string", title: "Lens" },
        { name: "camera", type: "string", title: "Camera" },
      ],
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
