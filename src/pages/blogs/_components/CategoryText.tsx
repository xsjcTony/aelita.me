import type { FC } from 'react'
import type { BlogCategories } from '~constants/blogCategories'
import { cn } from '~utils/className'


type CategoryTextProps = {
  type: BlogCategories
  longhand?: boolean
  className?: string
}


const CATEGORY_TEXT_MAP: Record<BlogCategories, string> = {
  ts: 'TS',
  js: 'JS',
  react: 'React',
  vue: 'Vue',
  astro: 'Astro',
}


const LONGHAND_CATEGORY_TEXT_MAP: Record<BlogCategories, string> = {
  ...CATEGORY_TEXT_MAP,
  ts: 'TypeScript',
  js: 'JavaScript',
}


const CategoryText: FC<CategoryTextProps> = ({ type, longhand, className }) => (
  <span
    className={cn('font-bold text-(--color)', className)}
    style={{ '--color': `var(--category-${type}-bg--active)` }}
  >
    {longhand ? LONGHAND_CATEGORY_TEXT_MAP[type] : CATEGORY_TEXT_MAP[type]}
  </span>
)


export default CategoryText
