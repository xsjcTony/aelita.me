import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'
import { BLOG_CATEGORIES } from '~constants/blogCategories'


const blogs = defineCollection({
  loader: glob({ pattern: ['*.md'], base: './blogs' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    categories: z.array(z.enum(BLOG_CATEGORIES)),
    lang: z.enum(['en', 'zh']),
    duration: z.number(),
    description: z.string(),
  }),
})


export const collections = { blogs }
