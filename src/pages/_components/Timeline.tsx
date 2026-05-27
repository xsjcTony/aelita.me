import type { FC, ReactNode } from 'react'
import { BriefcaseBusinessIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import AccessibleIcon from '~components/AccessibleIcon'
import FadeInWrapper from '~components/motion/FadeInWrapper'
import { useResizeObserver } from '~hooks/useResizeObserver'


export type TimelineItem = {
  icon?: ReactNode
  title: string
  content: ReactNode
}

type TimelineProps = {
  items: TimelineItem[]
}


const Timeline: FC<TimelineProps> = ({ items }) => {

  const containerElRef = useRef<HTMLDivElement>(null)


  const { height: containerHeight } = useResizeObserver(containerElRef)


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
      className="relative isolate grid gap-x-(--grid-gap) gap-y-40 grid-cols-[min-content_auto] [--grid-gap:20px] [--top-gap:20px] [--icon-container-size:32px] [--icon-size:1em] lg:gap-y-80 lg:[--grid-gap:40px] lg:[--top-gap:30px] lg:[--icon-container-size:48px] lg:[--icon-size:1.5em] xl:grid-cols-[min-content_max-content_auto]"
    >
      {items.map(({
        icon = (
          <AccessibleIcon label="commercial work">
            <BriefcaseBusinessIcon />
          </AccessibleIcon>
        ),
        title,
        content,
      }, index) => (
        <FadeInWrapper
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="grid gap-y-(--grid-gap) col-span-full grid-cols-subgrid xl:grid-rows-[min-content_auto]"
        >
          {/* Icon circle */}
          <div className="sticky h-(--icon-container-size) shrink-0 flex justify-center items-center top-(--top-gap) isolate">
            <div className="flex justify-center items-center size-(--icon-container-size) rounded-full bg-neutral-800 [&>svg]:size-(--icon-size)">
              {icon}
            </div>
            <div className="absolute w-80 h-80 -z-1 rounded-full bg-radial from-bg from-40% to-transparent to-70% lg:h-120" />
          </div>

          {/* Title & content */}
          <div className="sticky top-(--top-gap) z-1 bg-bg h-(--icon-container-size) flex items-center shadow-[0_calc(-1*var(--top-gap))_0_var(--color-bg)] xl:col-span-2">
            <h3 className="text-h3">{title}</h3>
            <div className="absolute inset-x-0 top-full h-(--grid-gap) bg-linear-to-b from-bg to-transparent" />
          </div>

          {content}
        </FadeInWrapper>
      ))}

      {/* Gradient tracing beam */}
      <motion.div
        className="absolute left-[calc(var(--icon-container-size)/2-1px)] inset-y-0 -z-1 w-2 mask-b-from-[calc(100%-20px)]"
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
