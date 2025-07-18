import type { FC } from 'react'
import { ArrowUpIcon } from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { cn } from '~utils/className'
import { scrollToTop } from '~utils/dom'


const BackToTop: FC = () => {

  const [isButtonShow, setIsButtonShow] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 88 && !isButtonShow)
      setIsButtonShow(true)
    else if (latest <= 88 && isButtonShow)
      setIsButtonShow(false)
  })


  return (
    <button
      className={cn(
        'fixed size-40 right-12 bottom-12 rounded-full text-fg-lighter flex justify-center items-center cursor-pointer hover:bg-[#888]/30 hover:opacity-100 transition-[background-color,opacity] duration-300',
        isButtonShow ? 'opacity-30' : 'opacity-0 pointer-events-none',
      )}
      title="Back to top"
      type="button"
      onClick={scrollToTop}
    >
      <ArrowUpIcon size={20} />
    </button>
  )
}


export default BackToTop
