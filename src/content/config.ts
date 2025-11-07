import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content', 
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        draft: z.boolean().optional(),
        image: z.string().optional(), // for cover images
    }),
});

export const collections = { blog };