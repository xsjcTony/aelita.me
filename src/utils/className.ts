import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'


const twMerge = extendTailwindMerge<'typography'>({
  extend: {
    classGroups: {
      typography: [{ text: ['h2', 'h3'] }],
    },
  },
})


export function cn(...classNames: ClassValue[]): string {
  return twMerge(clsx(classNames))
}
