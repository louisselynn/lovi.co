import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "description",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ['MEN', 'WOMEN', 'KIDS', 'ACCESSORIES'], 
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "tags",
      type: "array",
      of:[{
        type: "string",
      }],
    }),
    defineField({
      name: "variant",
      type: "reference",
      to:{
        type: "variant",
      },
    }),
    defineField({
      name: "isActive",
      type: "boolean",
    }),
    defineField({
      name: "rating",
      type: "number",
    }),
  ],
  initialValue: {
    isActive: false,
  },
  preview: {
    select: {
      title: "product",
    },
  },
});


