import { defineField, defineType } from "sanity";

export const size = defineType({
  name: "size",
  title: "Size",
  type: "object",
  fields: [
    defineField({
      name: "variant",
      type: "reference",
      to: {
        type: "variant"
      }
    }),
    defineField({
      name: "size",
      type: "string",
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', '2XL'], 
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stock',
      type: 'number',
      validation: (Rule) => Rule.required().min(0), 
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0), // Ensures price is a non-negative number
    }),
    defineField({
      name: "oldPrice",
      type: "number",
    }),
    defineField({
      name: "onSale",
      type: "boolean",
    }),    
  ],
  preview: {
    select: {
      title: "size",
    },
  },
  initialValue: {
    onSale: false,
  }
});


