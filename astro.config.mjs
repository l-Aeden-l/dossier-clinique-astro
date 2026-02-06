// @ts-check
import { defineConfig } from 'astro/config';
import { z } from 'astro/zod';

// https://astro.build/config
export default defineConfig({
  collections: {
    parcours: {
      type: 'content',
      schema: ({ z }) => z.object({
        title: z.string(),
        period: z.string(),
        content: z.string(),
        date: z.date()
      })
    }
  }
});
