import type { CollectionEntry } from 'astro:content'
import type { FC } from 'react'
import type { BlogCategoriesOrAll } from '~constants/blogCategories'
import { CircleSlash2Icon, MousePointerClickIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Toolbar } from 'radix-ui'
import { useMemo, useState } from 'react'
import { BLOG_CATEGORIES } from '~constants/blogCategories'
import { LOCAL_STORAGE_KEYS } from '~constants/keys'
import { useMount } from '~hooks/useMount'
import CategoryTag from '~pages/blogs/_components/CategoryTag'
import CategoryText from '~pages/blogs/_components/CategoryText'
import { formatDate } from '~utils/date'


type BlogListProps = {
  blogs: CollectionEntry<'blogs'>[]
}


const DEFAULT_SELECTED_CATEGORIES = 'all'


function readFromLocalStorage(): BlogCategoriesOrAll {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.BLOG_CATEGORIES)
    ?? `"${DEFAULT_SELECTED_CATEGORIES}"`,
  ) as BlogCategoriesOrAll
}

function writeToLocalStorage(value: BlogCategoriesOrAll): void {
  localStorage.setItem(LOCAL_STORAGE_KEYS.BLOG_CATEGORIES, JSON.stringify(value))
}


const BlogList: FC<BlogListProps> = ({ blogs }) => {

  // eslint-disable-next-line react/hook-use-state
  const [
    selectedCategories,
    _setSelectedCategories,
  ] = useState<BlogCategoriesOrAll | null>(null)


  useMount(() => void _setSelectedCategories(readFromLocalStorage()))


  const setSelectedCategories = (value: BlogCategoriesOrAll | null): void => {
    _setSelectedCategories(value)
    value && writeToLocalStorage(value)
  }


  const filteredBlogs = useMemo(() => {
    if (
      selectedCategories == null
      || selectedCategories === 'all'
      || selectedCategories.length === BLOG_CATEGORIES.length
    )
      return blogs

    return blogs.filter(
      blog => blog.data.categories.some(
        category => selectedCategories.includes(category),
      ),
    )
  }, [blogs, selectedCategories])


  return (
    // gap-y: 60 - 10 = 50
    <div className="flex flex-col gap-y-50 lg:gap-y-70">
      <Toolbar.Root className="flex flex-col items-center gap-y-20 lg:gap-y-24" orientation="vertical">
        <Toolbar.ToggleGroup
          type="single"
          value={selectedCategories === 'all' ? selectedCategories : ''}
          onValueChange={() => void setSelectedCategories(DEFAULT_SELECTED_CATEGORIES)}
        >
          <CategoryTag type="all" />
        </Toolbar.ToggleGroup>

        <Toolbar.Separator className="w-40 h-1 bg-fg/50" />

        <Toolbar.ToggleGroup
          className="flex flex-wrap gap-8 justify-center lg:gap-12"
          type="multiple"
          value={selectedCategories === 'all' || selectedCategories == null ? [] : selectedCategories}
          onValueChange={(categories) => {
            const value = categories.length > 0
              ? categories as BlogCategoriesOrAll
              : DEFAULT_SELECTED_CATEGORIES

            setSelectedCategories(value)
          }}
        >
          {BLOG_CATEGORIES.map(category =>
            <CategoryTag key={category} type={category} />)}
        </Toolbar.ToggleGroup>
      </Toolbar.Root>


      <div className="flex flex-col [&_a]:no-underline text-fg-lighter">
        <AnimatePresence>
          {filteredBlogs.map(({ id, data }) => (
            <motion.a
              key={id}
              animate={{ opacity: 1, y: 0 }}
              className="relative py-10 xl:py-12"
              exit={{ opacity: 0, y: -10 }}
              href={`/blogs/${id}`}
              initial={{ opacity: 0, y: -10 }}
              layout="position"
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex flex-col gap-y-4 pointer-fine:opacity-60 hover:opacity-100 transition-opacity duration-300 xl:flex-row xl:gap-x-16 xl:items-center"
              >
                <p className="text-lg">{data.title}</p>
                <div className="flex gap-x-8 items-center text-sm text-fg-dark">
                  <span>{formatDate(data.date)}</span>
                  <span role="separator">·</span>
                  <span>{data.duration}min</span>
                  <span className="xl:hidden" role="separator">·</span>
                  {data.categories.map(category =>
                    <CategoryText key={category} className="xl:hidden" type={category} />)}
                </div>
              </div>

              <div
                aria-hidden
                className="absolute inset-y-0 -translate-x-[calc(100%+16px)] flex gap-x-8 items-center text-sm max-xl:hidden"
              >
                {data.categories.map(category => (
                  <CategoryText
                    key={category}
                    className="hidden xl:block"
                    type={category}
                  />
                ))}
              </div>
            </motion.a>
          ))}


          {filteredBlogs.length === 0 && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-x-0 pt-10 flex flex-col items-center gap-y-40 text-fg "
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <CircleSlash2Icon className="size-[4em] lg:size-[6em]" />

              <p className="lg:text-xl">No blogs found</p>

              <div className="relative">
                <motion.button
                  className="cursor-pointer px-16 py-8 border rounded-lg lg:text-lg"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => void setSelectedCategories('all')}
                >
                  Clear Filters
                </motion.button>
                <MousePointerClickIcon
                  className="absolute right-0 bottom-0 translate-x-full translate-y-full pointer-events-none size-[2em] lg:size-[2.5em]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


export default BlogList
