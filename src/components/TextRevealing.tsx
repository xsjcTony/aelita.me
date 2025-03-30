/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import type { TargetAndTransition, Transition } from 'motion/react'
import type { FC, MouseEventHandler, TouchEventHandler } from 'react'
import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { useMount } from '@hooks/useMount'
import { cn } from '@utils/className.ts'


type TextRevealingProps = {
  baseText: string
  revealedText: string
  rootClassName?: string
}


const TextRevealing: FC<TextRevealingProps> = ({
  baseText,
  revealedText,
  rootClassName,
}) => {

  const [widthPercentage, setWidthPercentage] = useState<number>(0)
  const [left, setLeft] = useState<number>(0)
  const [localWidth, setLocalWidth] = useState<number>(0)

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)


  useMount(() => {
    if (!containerRef.current)
      return

    const { left, width: localWidth } = containerRef.current.getBoundingClientRect()

    setLeft(left)
    setLocalWidth(localWidth)
  })


  // event handlers
  const mouseEnterHandler = (() => {
    setIsMouseOver(true)
  }) satisfies MouseEventHandler<HTMLDivElement> | TouchEventHandler<HTMLDivElement>

  const mouseLeaveHandler = (() => {
    setIsMouseOver(false)
    setWidthPercentage(0)
  }) satisfies MouseEventHandler<HTMLDivElement> | TouchEventHandler<HTMLDivElement>


  const mouseMoveHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!containerRef.current)
      return

    e.preventDefault()

    const { clientX } = e
    const relativeX = clientX - left
    const widthPercentage = (relativeX / localWidth) * 100

    setWidthPercentage(widthPercentage)
  }


  // revealed text animation
  const revealedTextAnimate: TargetAndTransition = isMouseOver
    ? {
      opacity: widthPercentage > 0 ? 1 : 0,
      clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
    }
    : { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }


  // base text animation
  const baseTextAnimate: TargetAndTransition = {
    left: `${widthPercentage}%`,
    opacity: widthPercentage > 0 ? 1 : 0,
  }


  const textTransition: Transition = isMouseOver ? { duration: 0 } : { duration: 0.4 }


  return (
    <div
      ref={containerRef}
      className={cn(
        'p-24 relative overflow-hidden isolate text-9xl whitespace-nowrap select-none',
        rootClassName,
      )}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
    >
      <motion.div
        animate={revealedTextAnimate}
        className="inset-0 absolute z-1 will-change-transform flex justify-center items-center"
        transition={textTransition}
      >
        {revealedText}
      </motion.div>

      <motion.div
        animate={baseTextAnimate}
        className="inset-0 absolute z-2 will-change-transform"
        transition={textTransition}
      />

      <div className="inset-0 absolute flex justify-center items-center">
        {baseText}
      </div>

      <div className="invisible">
        {baseText.length > revealedText.length ? baseText : revealedText}
      </div>
    </div>
  )
}


export default TextRevealing
