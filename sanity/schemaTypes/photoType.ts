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
      type: "text",
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
        { name: "focalLength", type: "string", title: "Focal Length" },
        { name: "camera", type: "string", title: "Camera" },
      ],
    }),
  ],
  preview: {
    select: {
      fileName: "image.asset.originalFilename",
      subtitle: "description",
      media: "image",
    },
    prepare(selection) {
      const { fileName } = selection;
      return { ...selection, title: fileName };
    },
  },
});
