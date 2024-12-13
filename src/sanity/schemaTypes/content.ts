import { Rule } from "sanity";
export default {
  name: "content",
  type: "document",
  title: "Content Block",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      description: "The main heading for the content block.",
      validation: (Rule:Rule) =>
        Rule.required()
          .min(10)
          .max(30)
          .warning("Paragraph should be between 20 and 500 characters."),
    },
    {
      name: "paragraph",
      type: "text",
      title: "Paragraph",
      description: "A paragraph of text for this content block.",
      validation: (Rule: Rule) =>
        Rule.required()
          .min(20)
          .max(120)
          .warning("Paragraph should be between 20 and 500 characters."),
    },
    {
      name: "image",
      type: "image",
      title: "Content Image",
    },
    {
      name: "leftButton",
      type: "string",
      title: "Left Button",
      description: "left",
    },
    {
      name: "rightButton",
      type: "string",
      title: "Right Button",
      description: "Right",
    },
  ],
};
