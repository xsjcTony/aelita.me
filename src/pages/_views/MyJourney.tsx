import type { TimelineItem } from '@pages/_components/Timeline'
import type { FC, ReactNode } from 'react'
import {
  Docker,
  Kubernetes,
  Laravel,
  Playwright,
  ReactDark,
  TypeScript,
  Vite,
  Vitest,
} from '@ridemountainpig/svgl-react'
import { Building2Icon, GraduationCapIcon, IdCardIcon, MapPinIcon } from 'lucide-react'
import { AccessibleIcon } from 'radix-ui'
import ResponsiveProse from '@pages/_components/ResponsiveProse'
import SectionWithTitle from '@pages/_components/SectionWithTitle'
import Timeline from '@pages/_components/Timeline'


function makeContent({ title, organization, location, content }: {
  title: string
  organization?: string
  location: string
  content: ReactNode
}): ReactNode {
  return (
    <>
      <div className="col-start-2 self-start flex flex-col gap-y-8 relative isolate p-12 text-xs text-fg-light md:text-sm md:px-14 lg:text-base lg:px-16">
        <h4 className="flex items-center gap-x-8 font-bold">
          <AccessibleIcon.Root label="job title">
            <IdCardIcon className="shrink-0 size-[1.2em] -translate-y-px md:-translate-y-0.5" />
          </AccessibleIcon.Root>
          <span>{title}</span>
        </h4>

        {organization && (
          <>
            <hr className="border-dashed border-fg/50" />
            <p className="flex items-center gap-x-8">
              <AccessibleIcon.Root label="organization name">
                <Building2Icon className="shrink-0 size-[1.2em] -translate-y-px" />
              </AccessibleIcon.Root>
              <span>{organization}</span>
            </p>
          </>
        )}

        <hr className="border-dashed border-fg/50" />

        <p className="flex items-center gap-x-8">
          <AccessibleIcon.Root label="location">
            <MapPinIcon className="shrink-0 size-[1.2em] -translate-y-px" />
          </AccessibleIcon.Root>
          <span>{location}</span>
        </p>

        <div
          className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary p-2 mask-(--mask-image) mask-exclude"
          style={{
            '--mask-image': 'linear-gradient(#000 0 0), linear-gradient(#000 0 0)',
            maskClip: 'content-box, border-box',
          }}
        />
      </div>

      <div className="col-start-2 xl:col-start-3 xl:row-start-2">{content}</div>
    </>
  )
}


const MyJourney: FC = () => {


  const items: TimelineItem[] = [
    {
      title: '2022 - PRESENT',
      content: makeContent({
        title: 'Software Engineer',
        organization: 'NOW Finance',
        location: 'Melbourne, Australia',
        content: (
          <ResponsiveProse>
            <p>
              As a front-end leaning software engineer, I was primarily responsible for developing the <ReactDark className="size-[1em] -translate-y-px" /> <strong>React</strong>-based front-end, along with some back-end tasks using <Laravel className="size-[1em] -translate-y-px" /> <strong>Laravel</strong>.
            </p>
            <ul>
              <li>Built a feature-rich form-based accessible website for customers to apply loans.</li>
              <li>Built an internal admin system to enable other teams to manage loan applications.</li>
              <li>Collaborated with cross-functional teams in an <strong>Agile</strong> environment.</li>
              <li>Introduced <Vitest className="w-[1em] -translate-y-px" /> <strong>unit tests</strong> and <Playwright className="size-[1.3em] -translate-y-2" /> <strong>E2E tests</strong> and made them standards.</li>
              <li>Contributed to automation of internal workflows and deployment pipelines.</li>
              <li>Mentored junior team members and established rigorous PR review standards.</li>
              <li>Introduced <TypeScript className="size-[1em] -translate-y-px" /> <strong>TypeScript</strong>, <Vite className="size-[1em] -translate-y-px" /> <strong>Vite</strong> and a few more new technologies into the tech stack.</li>
            </ul>
          </ResponsiveProse>
        ),
      }),
    },
    {
      title: '2020 - 2022',
      content: makeContent({
        title: 'Freelance Software Engineer',
        location: 'Melbourne, Australia',
        content: (
          <ResponsiveProse>
            <p>
              As a freelance software engineer, I helped clients build modern, responsive applications from prototype to deployment with high quality and good accessibility.
            </p>
            <ul>
              <li>Built several various kinds of full-stack projects from different clients, including SAAS, e-commerce platform, etc.</li>
              <li>Provided technical support to clients for various complex issues, which also greatly strengthened my problem-solving skills and broadened my knowledge.</li>
              <li>Contributed to a lot of open-source software, resolved a decent amount of GitHub issues from those projects.</li>
            </ul>
          </ResponsiveProse>
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
          <ResponsiveProse>
            <p>
              As my first job, it not only helped me build technical knowledge, but also taught me the basics of workplace etiquette and how to communicate effectively with colleagues.
            </p>
            <ul>
              <li>Learnt how <Docker className="size-[1em] -translate-y-px" /> Docker and <Kubernetes className="size-[1em] -translate-y-px" /> Kubernetes fundamentally works.</li>
              <li>Set up local Kubernetes environment and deployed to the staging server for testing.</li>
              <li>Documented a few internal bugs of Kubernetes and addressed some workarounds.</li>
              <li>Translated the official English documentation for other team members to consume.</li>
            </ul>
          </ResponsiveProse>
        ),
      }),
    },
    {
      icon: (
        <AccessibleIcon.Root label="school period">
          <GraduationCapIcon />
        </AccessibleIcon.Root>
      ),
      title: '2018 - 2021',
      content: makeContent({
        title: 'University Student',
        organization: 'RMIT University',
        location: 'Melbourne, Australia',
        content: (
          <ResponsiveProse>
            <p>Graduated with a <strong>Bachelor of Computer Science</strong> degree.</p>
            <ul>
              <li>Achieved <strong>HD (97/100)</strong> in <u>Web Programming</u></li>
              <li>Achieved <strong>HD 💯 (100/100)</strong> in <u>Programming 1</u></li>
            </ul>
          </ResponsiveProse>
        ),
      }),
    },
    {
      icon: (
        <AccessibleIcon.Root label="school period">
          <GraduationCapIcon />
        </AccessibleIcon.Root>
      ),
      title: '2015 - 2017',
      content: makeContent({
        title: 'Senior School Student',
        organization: 'Brighton Grammar School',
        location: 'Melbourne, Australia',
        content: (
          <ResponsiveProse>
            <p>Graduated with an ATAR of <strong>88.5</strong> in the VCE</p>
          </ResponsiveProse>
        ),
      }),
    },
  ]


  return (
    <SectionWithTitle title="My Journey">
      <Timeline items={items} />
    </SectionWithTitle>
  )
}


export default MyJourney
