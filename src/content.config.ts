import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// New writing lives at /writing/[slug]; drafts appear in the index as
// unlinked rows and never get a route.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    // Overrides the computed estimate when set.
    readingTime: z.number().optional(),
  }),
});

// Pre-redesign posts, kept at their original /posts/[slug] URLs.
const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { writing, archive };
