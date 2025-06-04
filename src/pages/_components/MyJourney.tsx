import type { TimelineItem } from '@components/Timeline'
import type { FC, ReactNode } from 'react'
import { SiDocker, SiLaravel, SiReact, SiTypescript } from '@icons-pack/react-simple-icons'
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
        <h4 className="flex items-center gap-x-8 text-xs text-fg-light">
          <IdCardIcon className="shrink-0 size-[1.2em] -translate-y-px" />
          <span>{title}</span>
        </h4>

        {organization && (
          <>
            <hr className="border-dashed border-fg/50" />
            <p className="flex items-center gap-x-8 text-xs text-fg-light">
              <Building2 className="shrink-0 size-[1.2em] -translate-y-px" />
              <span>{organization}</span>
            </p>
          </>
        )}

        <hr className="border-dashed border-fg/50" />

        <p className="flex items-center gap-x-8 text-xs text-fg-light">
          <MapPinIcon className="shrink-0 size-[1.2em] -translate-y-px" />
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


const MyJourney: FC = () => {

  const {
    containerElRef,
    animateElScope,
  } = useFadeInWhenParentIsInView<HTMLElement, HTMLHeadingElement>({ margin: '-180px 0px' })


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
              <li>Built a feature-rich form-based accessible website for customers to apply loans.</li>
              <li>Built an internal admin system to enable other teams to manage loan applications.</li>
              <li>Collaborated with cross-functional teams in an <strong>Agile</strong> environment.</li>
              <li>Introduced <img alt="vitest logo" className="size-[1em] -translate-y-px" src="https://vitest.dev/logo.svg" /> <strong>unit tests</strong> and <img alt="playwright logo" className="size-[1.2em] -translate-y-2" src="https://playwright.dev/img/playwright-logo.svg" /> <strong>E2E tests</strong> and made them standards.</li>
              <li>Contributed to automation of internal workflows and deployment pipelines.</li>
              <li>Mentored junior team members and established rigorous PR review standards.</li>
              <li>Introduced <SiTypescript className="-translate-y-px" color="default" size="1em" /> <strong>TypeScript</strong>, <img alt="vite logo" className="h-[1em] -translate-y-px" src="https://vite.dev/logo.svg" /> <strong>Vite</strong> and a few more new technologies into the tech stack.</li>
            </ul>
          </div>
        ),
      }),
    },
    {
      title: '2020 - 2022',
      content: makeContent({
        title: 'Freelance Software Engineer',
        location: 'Melbourne, Australia',
        content: (
          <div className="prose prose-sm prose-img-inline prose-fluid">
            <p>
              As a freelance software engineer, I helped clients build modern, responsive applications from prototype to deployment with high quality and good accessibility.
            </p>
            <ul>
              <li>Built several various kind of full-stack projects from different clients, including SAAS, e-commerce platform, etc.</li>
              <li>Provided technical support to clients for various complex issues, which also greatly strengthened my problem-solving skills and broadened my knowledge.</li>
              <li>Contributed to a lot of open-source software, resolved a decent amount of GitHub issues from those projects.</li>
            </ul>
          </div>
        ),
      }),
    },
    {
      title: '2018 - 2019',
      content: makeContent({
        title: 'Administrator of Kubernetes Cluster',
        organization: 'China Unicom',
        location: 'Shanghai, China',
        content: (
          <div className="prose prose-sm prose-img-inline prose-fluid">
            <p>
              As my first job, it not only helped me build technical knowledge, but also taught me the basics of workplace etiquette and how to communicate effectively with colleagues.
            </p>
            <ul>
              <li>Learnt how <SiDocker className="-translate-y-px" color="default" size="1em" /> Docker and <img alt="kubernetes logo" className="size-[1em] -translate-y-px" src="/assets/images/kubernetes-logo.svg" /> Kubernetes fundamentally works.</li>
              <li>Set up local Kubernetes environment and deployed to the staging server for testing.</li>
              <li>Documented a few internal bugs of Kubernetes and addressed some workarounds.</li>
              <li>Translated the official English documentation for other team members to consume.</li>
            </ul>
          </div>
        ),
      }),
    },
    {
      type: 'education',
      title: '2018 - 2021',
      content: makeContent({
        title: 'University Student',
        organization: 'RMIT University',
        location: 'Melbourne, Australia',
        content: (
          <div className="prose prose-sm prose-img-inline prose-fluid">
            <p>Graduated with a <strong>Bachelor of Computer Science</strong> degree.</p>
            <ul>
              <li>Achieved <strong>HD (97/100)</strong> in <u>Web Programming</u></li>
              <li>Achieved <strong>HD 💯 (100/100)</strong> in <u>Programming 1</u></li>
            </ul>
          </div>
        ),
      }),
    },
    {
      type: 'education',
      title: '2015 - 2017',
      content: makeContent({
        title: 'Senior School Student',
        organization: 'Brighton Grammar School',
        location: 'Melbourne, Australia',
        content: (
          <div className="prose prose-sm prose-img-inline prose-fluid">
            <p>Graduated with an ATAR of <strong>88.5</strong> in the VCE</p>
          </div>
        ),
      }),
    },
  ]


  return (
    <motion.section ref={containerElRef} className="container py-80" id="my-journey">
      <motion.div ref={animateElScope} className="mb-40" initial={{ opacity: 0, y: 20 }}>
        <WithSparkles>
          <h2 className="text-3xl text-center font-bold text-fg-lighter">My Journey</h2>
        </WithSparkles>
      </motion.div>

      <Timeline items={items} />
    </motion.section>
  )
}


export default MyJourney
