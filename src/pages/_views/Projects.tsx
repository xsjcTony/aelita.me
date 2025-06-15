import type { FC } from 'react'
import MotionFadeInWrapper from '@components/MotionFadeInWrapper'
import PointerHighlight from '@components/PointerHighlight'
import SectionWithTitle from '@pages/_components/SectionWithTitle'


type ProjectProps = {
  title: string
  highlighted?: boolean
  projects: any[] // TODO
}


const Project: FC<ProjectProps> = ({
  title,
  highlighted = false,
  projects,
}) => {
  const titleEl = <h3 className="text-h3 text-center">{title}</h3>

  return (
    <MotionFadeInWrapper>
      <div className="flex flex-col gap-y-20">
        {highlighted
          ? (
            <div className="flex justify-center">
              <PointerHighlight delay={1} paddingInline={8}>{titleEl}</PointerHighlight>
            </div>
          )
          : titleEl}

        {projects.map(proj => JSON.stringify(proj))}
      </div>
    </MotionFadeInWrapper>
  )
}


const Projects: FC = () => (
  <SectionWithTitle title="Projects">
    <div className="flex flex-col gap-y-40">
      123
    </div>
  </SectionWithTitle>
)


export default Projects
