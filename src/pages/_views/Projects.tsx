import type { FC, ReactNode } from 'react'
import FadeInWrapper from '~components/motion/FadeInWrapper'
import PointerHighlight from '~components/PointerHighlight'
import { PROJECTS_CONTRIBUTION, PROJECTS_OSS, PROJECTS_WEBSITES_AND_TOOLS } from '~constants/projects'


export type Project = {
  logo: ReactNode
  name: string
  description: string
  link: string
}

type ProjectProps = {
  title: string
  highlighted?: boolean
  projects: Project[]
}


const Project: FC<ProjectProps> = ({
  title,
  highlighted = false,
  projects,
}) => {
  const titleEl = <h3 className="text-h3 text-center">{title}</h3>

  return (
    <FadeInWrapper>
      <div className="flex flex-col gap-y-20">
        {highlighted
          ? (
            <div className="flex justify-center">
              <PointerHighlight delay={1} paddingInline={8}>{titleEl}</PointerHighlight>
            </div>
          )
          : titleEl}

        <div className="grid xl:grid-cols-2">
          {projects.map(({ logo, name, link, description }) => (
            <a
              key={name}
              className="flex items-center gap-x-24 no-underline p-16 rounded-lg group hover:bg-fg-lighter/5 transition-[background_color] duration-300"
              href={link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex shirnk-0 [&>svg,img]:size-36 [&>svg,img]:max-w-none pointer-fine:opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {logo}
              </div>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-fg-light font-bold">{name}</h4>
                <p className="text-sm pointer-fine:opacity-60 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </FadeInWrapper>
  )
}


const Projects: FC = () => (
  <div className="flex flex-col gap-y-60">
    <Project highlighted projects={PROJECTS_OSS} title="Open Source" />
    <Project projects={PROJECTS_WEBSITES_AND_TOOLS} title="Websites and Tools" />
    <Project projects={PROJECTS_CONTRIBUTION} title="Contribution" />
  </div>
)


export default Projects
