import type { FC } from 'react'
import type { BlogCategories } from '~constants/blogCategories'
import { cn } from '~utils/className'


type CategoryTextProps = {
  type: BlogCategories
  className?: string
}


const CATEGORY_TEXT_MAP: Record<BlogCategories, string> = {
  ts: 'TS',
  js: 'JS',
  react: 'React',
  vue: 'Vue',
  astro: 'Astro',
}


const CategoryText: FC<CategoryTextProps> = ({ type, className }) => (
  <span
    className={cn('font-bold text-(--color)', className)}
    style={{ '--color': `var(--category-${type}-bg-active)` }}
  >
    {CATEGORY_TEXT_MAP[type]}
  </span>
)


export default CategoryText
