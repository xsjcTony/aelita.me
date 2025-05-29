import type { FC, ReactNode } from 'react'
import { CalendarRangeIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import MotionFadeInWrapper from '@components/MotionFadeInWrapper.tsx'
import { useWindowResize } from '@hooks/useWindowResize.ts'


export type TimelineItem = {
  title: string
  content: ReactNode
}

type TimelineProps = {
  items: TimelineItem[]
}


const Timeline: FC<TimelineProps> = ({ items }) => {

  const containerElRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState<number>(0)


  useWindowResize(() => {
    containerElRef.current
    && setContainerHeight(containerElRef.current.getBoundingClientRect().height)
  })


  const { scrollYProgress } = useScroll({
    target: containerElRef,
    offset: ['start 50%', 'end 50%'],
  })


  const beamHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight],
  )


  return (
    <div
      ref={containerElRef}
      className="flex flex-col gap-y-40 relative isolate"
    >
      {items.map(({ title, content }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MotionFadeInWrapper key={index}>
          <div className="flex gap-x-20">
            {/* Calendar circle */}
            <div className="sticky h-40 shrink-0 flex justify-center items-center top-20 isolate">
              <div className="flex justify-center items-center size-32 rounded-full bg-neutral-800">
                <CalendarRangeIcon className="size-[1em]" />
              </div>
              <div className="absolute size-80 -z-1 rounded-full bg-radial from-(--color-background) from-40% to-transparent to-70%" />
            </div>

            {/* Title & content */}
            <div className="flex flex-col gap-y-20">
              <div className="sticky top-20 z-1 bg-background h-40 flex items-center shadow-[0_-40px_0_var(--color-background)]">
                <h3 className="text-2xl font-bold text-foreground-light">{title}</h3>
                <div className="absolute inset-x-0 top-full h-20 bg-linear-to-b from-background to-transparent" />
              </div>
              <div>{content}</div>
            </div>
          </div>
        </MotionFadeInWrapper>
      ))}

      {/* Gradient tracing beam */}
      <motion.div
        className="absolute left-15 inset-y-0 -z-1 w-2"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, margin: '-100px 0px' }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-t from-secondary to-primary to-[120px]"
          style={{ height: beamHeight }}
        />
      </motion.div>
    </div>
  )
}


export default Timeline
