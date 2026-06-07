import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    author: z.string(),
    authorEmail: z.string(),
    publishDate: z.coerce.date(),
    likes: z.number(),
  }),
});

export const collections = { blog };
