import type { TimelineItem } from '@components/Timeline'
import type { FC, ReactNode } from 'react'
import { CodeIcon, MapPinHouseIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Timeline from '@components/Timeline'
import { useFadeInWhenParentIsInView } from '@hooks/useFadeInWhenParentIsInView.ts'


function makeContent({ title, organization, location, content }: {
  title: string
  organization: string
  location: string
  content: ReactNode
}): ReactNode {
  return (
    <div>
      <div className="flex flex-col gap-y-8 mb-16 relative isolate p-12">
        <h4 className="flex items-center gap-x-8 text-xs text-foreground-light">
          <CodeIcon className="size-[1.2em]" />
          <span>{title} @ {organization}</span>
        </h4>
        <p className="flex items-center gap-x-8 text-xs text-foreground-light">
          <MapPinHouseIcon className="size-[1.2em]" />
          <span>{location}</span>
        </p>

        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary p-2 mask-(--mask-image) mask-exclude"
          style={{
            '--mask-image': 'linear-gradient(#000 0 0), linear-gradient(#000 0 0)',
            maskClip: 'content-box, border-box',
          }}
        />
      </div>

      <div>{content}</div>
    </div>
  )
}


const items: TimelineItem[] = [
  {
    title: '2022 - PRESENT',
    content: makeContent({
      title: 'Software Engineer',
      organization: 'NOW Finance',
      location: 'Melbourne, Australia',
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum error fuga, fugiat impedit pariatur sapiente sed voluptate voluptatem voluptates! Assumenda commodi, expedita. Assumenda autem id impedit molestiae, nemo quia?
        </div>
      ),
    }),
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
  {
    title: '2018 - 2019',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum error fuga, fugiat impedit pariatur sapiente sed voluptate voluptatem voluptates! Assumenda commodi, expedita. Assumenda autem id impedit molestiae, nemo quia?
      </div>
    ),
  },
]


const MyJourney: FC = () => {

  const {
    containerElRef,
    animateElScope,
  } = useFadeInWhenParentIsInView<HTMLElement, HTMLHeadingElement>({ margin: '-180px 0px' })


  return (
    <motion.section ref={containerElRef} className="container py-80">
      <motion.h2
        ref={animateElScope}
        className="text-3xl text-center font-bold text-foreground-lighter mb-40"
        initial={{ opacity: 0, y: 20 }}
      >
        My Journey
      </motion.h2>

      <Timeline items={items} />
    </motion.section>
  )
}


export default MyJourney
