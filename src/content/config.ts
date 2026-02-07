import { defineCollection, z } from 'astro:content';

const parcours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  parcours: parcours,
};
