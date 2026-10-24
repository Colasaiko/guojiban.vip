import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog' }), schema: z.object({ title: z.string(), description: z.string(), pubDate: z.coerce.date(), updatedDate: z.coerce.date(), category: z.string(), tags: z.array(z.string()), draft: z.boolean().default(false), featured: z.boolean().default(false), author: z.string(), example: z.boolean().default(true) }) });
const topics = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/topics' }), schema: z.object({ title: z.string(), description: z.string(), featured: z.boolean().default(false), updatedDate: z.coerce.date(), categories: z.array(z.string()).default([]), posts: z.array(z.string()).default([]) }) });
export const collections = { blog, topics };
