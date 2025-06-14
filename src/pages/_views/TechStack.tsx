import type { TechStackItem } from '@pages/_components/TechStackCards'
import type { FC } from 'react'
import MagneticCursor from '@components/MagneticCursor'
import MotionFadeInWrapper from '@components/MotionFadeInWrapper'
import PointerHighlight from '@components/PointerHighlight'
import { TECH_STACK_BACKEND, TECH_STACK_FRONTEND, TECH_STACK_LANGUAGES } from '@constants/techStacks'
import SectionWithTitle from '@pages/_components/SectionWithTitle'
import TechStackCards from '@pages/_components/TechStackCards'


type StackProps = {
  title: string
  highlighted?: boolean
  techStacks: TechStackItem[]
}


const Stack: FC<StackProps> = ({
  title,
  highlighted = false,
  techStacks,
}) => {
  const titleEl = <h3 className="text-h3">{title}</h3>

  return (
    <MotionFadeInWrapper margin="-200px 0px">
      <div className="flex flex-col">
        {highlighted
          ? <PointerHighlight delay={1} paddingInline={8}>{titleEl}</PointerHighlight>
          : titleEl}
        <TechStackCards items={techStacks} />
      </div>
    </MotionFadeInWrapper>
  )
}


const TechStack: FC = () => (
  <SectionWithTitle title="Tech Stack">
    <div className="flex flex-col gap-y-20" data-cursor-zone="techStack">
      <MagneticCursor activeZone="techStack" />
      <Stack techStacks={TECH_STACK_LANGUAGES} title="Languages" />
      <Stack highlighted techStacks={TECH_STACK_FRONTEND} title="Front-End" />
      <Stack techStacks={TECH_STACK_BACKEND} title="Back-End" />
    </div>
  </SectionWithTitle>
)


export default TechStack
