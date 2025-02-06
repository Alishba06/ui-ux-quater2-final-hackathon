import { defineType, defineField } from "sanity";

export const Ceramic = defineType({
  name: "ceramic",
  title: "Ceramic",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) =>
        rule.min(0).warning("Price should not be negative"),
    }),
    defineField({
      name: "inventory",
      title: "Inventory",
      type: "number",
      validation: (rule) => rule.required().min(0).warning("Inventory must be a non-negative number"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, 
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) =>
        rule.max(500).warning("Description should not exceed 500 characters."),
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object", 
      fields: [
        { name: "height", title: "Height", type: "string" },
        { name: "width", title: "Width", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
      ],
      description: "Dimensions of the product (e.g., height, width, depth).",
    }),
  ],
});

