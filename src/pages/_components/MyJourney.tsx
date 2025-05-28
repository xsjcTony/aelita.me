import type { TimelineItem } from '@components/Timeline'
import type { Variants } from 'motion/react'
import type { FC } from 'react'
import { motion } from 'motion/react'
import Timeline from '@components/Timeline'


const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}


const items: TimelineItem[] = [
  {
    title: '2022 - PRESENT',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum error fuga, fugiat impedit pariatur sapiente sed voluptate voluptatem voluptates! Assumenda commodi, expedita. Assumenda autem id impedit molestiae, nemo quia?
      </div>
    ),
  },
  {
    title: '2020 - 2022',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum error fuga, fugiat impedit pariatur sapiente sed voluptate voluptatem voluptates! Assumenda commodi, expedita. Assumenda autem id impedit molestiae, nemo quia?
      </div>
    ),
  },
  {
    title: '2018 - 2019',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum error fuga, fugiat impedit pariatur sapiente sed voluptate voluptatem voluptates! Assumenda commodi, expedita. Assumenda autem id impedit molestiae, nemo quia?
      </div>
    ),
  },
  {
    title: '2018 - 2019',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum error fuga, fugiat impedit pariatur sapiente sed voluptate voluptatem voluptates! Assumenda commodi, expedita. Assumenda autem id impedit molestiae, nemo quia?
      </div>
    ),
  },
]


const MyJourney: FC = () => (
  <motion.section
    className="container py-80"
    initial={{ opacity: 0, y: 20 }}
    variants={FADE_IN_VARIANTS}
    viewport={{ once: true, margin: '80px 0px' }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  >
    <h2 className="text-3xl font-bold text-foreground-lighter mb-40">My Journey</h2>
    <Timeline items={items} />
  </motion.section>
)


export default MyJourney
