import type { FC, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'


export type TimelineItem = {
  title: string
  content: ReactNode
}

type TimelineProps = {
  items: TimelineItem[]
}


const Timeline: FC<TimelineProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)


  useEffect(() => {
    console.log(containerRef)
    containerRef.current && setHeight(containerRef.current.getBoundingClientRect().height)
  }, [containerRef])


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })


  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])


  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-y-20"
    >
      {items.map((item, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="flex gap-x-20"
        >
          <div className="sticky h-40 shrink-0 flex justify-center items-center top-20">
            <div className="size-20 rounded-full bg-pink-500" />
          </div>

          <div>
            <h3 className="text-2xl font-bold h-40 flex items-center mb-16">
              {item.title}
            </h3>
            {item.content}{' '}
          </div>
        </div>
      ))}
      <div
        className="absolute left-32 top-0 overflow-hidden w-2 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        style={{
          height: `${height}px`,
        }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 w-2 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
        />
      </div>
    </div>
  )
}


export default Timeline
