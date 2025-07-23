import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import { BLOG_CATEGORIES } from '~constants/blogCategories'
import { sortByReference } from '~utils/array'


export async function getBlogs(): Promise<CollectionEntry<'blogs'>[]> {
  const blogs = await getCollection('blogs')

  // sort blog categories
  for (const blog of blogs)
    blog.data.categories = sortByReference(BLOG_CATEGORIES, blog.data.categories)

  return blogs
}
