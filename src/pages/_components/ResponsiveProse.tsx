import type { FC, ReactNode } from 'react'
import { BREAKPOINT_LG } from '~constants/breakpoints'
import { useMediaQuery } from '~hooks/useMediaQuery'
import { cn } from '~utils/className'


type ResponsiveProseProps = {
  children: ReactNode
  smallBreakpoint?: number
  isImageInline?: boolean
  isFluid?: boolean
  className?: string
}


const ResponsiveProse: FC<ResponsiveProseProps> = ({
  children,
  smallBreakpoint = BREAKPOINT_LG,
  isImageInline = true,
  isFluid = true,
  className,
}) => {

  const applySmallProse = useMediaQuery(`(width < ${smallBreakpoint}px)`)


  return (
    <div
      className={cn(
        'prose',
        applySmallProse && 'prose-sm',
        isImageInline && 'prose-img-inline',
        isFluid && 'prose-fluid',
        className,
      )}
    >
      {children}
    </div>
  )
}


export default ResponsiveProse
