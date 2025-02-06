
import { defineType, defineField } from "sanity";

export const Category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (rule) => rule.required(),
            options: {
                source: "name",
            }
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
            }
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: (rule) => rule.required(),
        })
    ]
});

