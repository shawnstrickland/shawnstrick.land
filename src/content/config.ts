import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    draft: z.boolean().optional().default(false),
    featuredImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  }),
});

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    free: z.boolean().default(true),
    videoUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    lsProductId: z.string().optional(),
  }),
});

const downloads = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    price: z.number().default(0),
    fileUrl: z.string().optional(),
    lsProductId: z.string().optional(),
    type: z.enum(['sheet-music', 'pdf', 'audio', 'bundle']).default('pdf'),
  }),
});

export const collections = { posts, lessons, downloads };
