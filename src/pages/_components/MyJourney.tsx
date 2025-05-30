import type { TimelineItem } from '@components/Timeline'
import type { FC, ReactNode } from 'react'
import { SiLaravel, SiReact } from '@icons-pack/react-simple-icons'
import { Building2, IdCardIcon, MapPinIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Timeline from '@components/Timeline'
import WithSparkles from '@components/WithSparkles'
import { useFadeInWhenParentIsInView } from '@hooks/useFadeInWhenParentIsInView'


function makeContent({ title, organization, location, content }: {
  title: string
  organization?: string
  location: string
  content: ReactNode
}): ReactNode {
  return (
    <div>
      <div className="flex flex-col gap-y-8 mb-16 relative isolate p-12">
        <h4 className="flex items-center gap-x-8 text-xs text-foreground-light">
          <IdCardIcon className="shrink-0 size-[1.2em]" />
          <span>{title}</span>
        </h4>

        {organization && (
          <>
            <hr className="border-dashed border-foreground/50" />
            <p className="flex items-center gap-x-8 text-xs text-foreground-light">
              <Building2 className="shrink-0 size-[1.2em]" />
              <span>{organization}</span>
            </p>
          </>
        )}

        <hr className="border-dashed border-foreground/50" />

        <p className="flex items-center gap-x-8 text-xs text-foreground-light">
          <MapPinIcon className="shrink-0 size-[1.2em]" />
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
        <div className="prose prose-sm prose-img-inline prose-fluid">
          <p>
            As a front-end leaning software engineer, I was primarily responsible for developing the <SiReact className="-translate-y-px" color="default" size="1em" /> <strong>React</strong>-based front-end, along with some back-end tasks using <SiLaravel className="-translate-y-px" color="default" size="1em" /> <strong>Laravel</strong>.
          </p>
          <ul>
            <li>Built a feature-rich form-based website for customers to apply loans.</li>
            <li>Built an internal admin system to enable other teams to manage loan applications.</li>
            <li>Collaborated with cross-functional teams in an <strong>Agile</strong> environment.</li>
            <li>Introduced <strong>unit tests</strong> and <strong>E2E tests</strong> and made them standards.</li>
            <li>Contributed to automation of internal workflows and deployment pipelines.</li>
            <li>Mentored junior team members and established rigorous PR review standards.</li>
            <li>Introduced <strong>TypeScript</strong>, <strong>Vite</strong> and a few more new technologies into the tech stack.</li>
          </ul>
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
      <motion.div ref={animateElScope} className="mb-40" initial={{ opacity: 0, y: 20 }}>
        <WithSparkles>
          <h2 className="text-3xl text-center font-bold text-foreground-lighter">My Journey</h2>
        </WithSparkles>
      </motion.div>

      <Timeline items={items} />
    </motion.section>
  )
}


export default MyJourney
