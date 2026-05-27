import type { FC } from 'react'
import type { BlogCategoriesWithAll } from '~constants/blogCategories'
import { Toggle, Toolbar } from '@base-ui/react'


type CategoryTagProps = {
  type: BlogCategoriesWithAll
}


const CATEGORY_LABEL_MAP: Record<BlogCategoriesWithAll, string> = {
  all: 'All Categories',
  ts: 'TypeScript',
  js: 'JavaScript',
  react: 'React',
  vue: 'Vue',
  astro: 'Astro',
}


const CategoryTag: FC<CategoryTagProps> = ({ type }) => (
  <Toolbar.Button
    className="relative isolate border border-(--color-border) rounded-md px-8 py-2 text-(--color) bg-bg cursor-pointer transition-[border-color,color,background-color] duration-500 before:absolute before:inset-y-1/10 before:inset-x-0 before:bg-(--color-bg--active)/80 before:blur-lg before:-z-1 before:opacity-0 before:transition-opacity before:duration-500 before:ease-[ease] before:will-change-[opacity] hover:before:opacity-100 data-pressed:bg-(--color-bg--active) data-pressed:text-(--color--active) data-pressed:border-(--color-border) lg:px-12 lg:py-3 lg:text-lg"
    render={<Toggle value={type} />}
    style={{
      '--color': `var(--category-${type}-color)`,
      '--color-bg': `var(--category-${type}-bg)`,
      '--color-border': `var(--category-${type}-border)`,
      '--color--active': `var(--category-${type}-color--active)`,
      '--color-bg--active': `var(--category-${type}-bg--active)`,
    }}
    type="button"
  >
    {CATEGORY_LABEL_MAP[type]}
  </Toolbar.Button>
)


export default CategoryTag
