import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Rohan"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
