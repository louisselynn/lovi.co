import { defineField, defineType } from "sanity";

export const variant = defineType({
  name: "variant",
  title: "Variant",
  type: "object",
  fields: [
    defineField({
      name: "product",
      type: "reference",
      to: {
        type: "product"
      }
    }),
    defineField({
      name: "color",
      type: "string",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        {
          type: "url",
        }       
      ],
      validation: (Rule) =>
        Rule.min(1).max(4).required().error("Provide at least 1 image, a max of 4.")
    }),
  ],
  preview: {
    select: {
      title: "color",
    },
  },
});


