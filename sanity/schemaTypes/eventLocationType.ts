import {defineField, defineType} from "sanity";

export const eventLocationType = defineType({
  name: "eventLocation",
  title: "Event Location",
  type: "document",
  fields: [
    defineField({
      name: "orderRank",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
    defineField({name: "cityEs", title: "City (ES)", type: "string"}),
    defineField({name: "cityEn", title: "City (EN)", type: "string"}),
    defineField({name: "cityDe", title: "City (DE)", type: "string"}),
    defineField({name: "cityFr", title: "City (FR)", type: "string"}),
    defineField({name: "cityIt", title: "City (IT)", type: "string"}),
    defineField({
      name: "dateStart",
      title: "Start date",
      type: "date",
      description: "Canonical event date used for automatic locale formatting.",
    }),
    defineField({
      name: "dateEnd",
      title: "End date (optional)",
      type: "date",
      description: "Optional end date for date ranges.",
    }),
  ],
  preview: {
    select: {
      title: "cityEn",
      subtitle: "dateStart",
      active: "isActive",
    },
    prepare(selection) {
      const {title, subtitle, active} = selection;
      return {
        title: title ?? "Untitled location",
        subtitle: `${active ? "Active" : "Inactive"} - ${subtitle ?? "No date"}`,
      };
    },
  },
});
