import type { FC, PropsWithChildren } from 'react'
import Sparkles from '@components/Sparkles'


const WithSparkles: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}

    <div className="w-full h-48 relative">
      {/* Gradients */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-gradient-to-r from-transparent via-primary to-transparent h-2 w-3/4 blur-sm" />
      <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
      <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-gradient-to-r from-transparent via-primary-3 to-transparent h-5 w-1/4 blur-sm" />
      <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-gradient-to-r from-transparent via-primary-3 to-transparent h-px w-1/4" />

      <Sparkles
        backgroundColor="transparent"
        className="h-40 absolute top-8 w-full"
        maxSize={1.2}
        minSize={0.4}
        particleColor="#fff"
        particleDensity={2500}
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute w-full h-40 top-8 bg-bg mask-radial-at-top mask-radial-[40%_120%] mask-radial-from-transparent mask-radial-from-20% mask-radial-to-white" />
    </div>
  </>
)


export default WithSparkles
