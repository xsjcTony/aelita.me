export type BlogCategories = (typeof BLOG_CATEGORIES)[number]
export type BlogCategoriesWithAll = BlogCategories | 'all'
export type BlogCategoriesOrAll = BlogCategories[] | 'all'


export const BLOG_CATEGORIES = [
  'ts',
  'js',
  'vue',
  'react',
  'astro',
] as const
