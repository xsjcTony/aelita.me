import type { FC, PropsWithChildren } from 'react'
import Sparkles from '@components/Sparkles'


const WithSparkles: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}

    <div className="w-[calc(100%+var(--additional-width))] h-[calc(var(--height)+var(--top))] relative [--additional-width:180px] [--top:8px] [--height:40px] lg:[--additional-width:300px] lg:[--top:16px] lg:[--height:64px]">
      {/* Gradients */}
      <div className="absolute left-1/2 -translate-x-1/2 top-(--top) bg-gradient-to-r from-transparent via-primary to-transparent h-2 w-3/4 blur-sm" />
      <div className="absolute left-1/2 -translate-x-1/2 top-(--top) bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
      <div className="absolute left-1/2 -translate-x-1/2 top-(--top) bg-gradient-to-r from-transparent via-primary-3 to-transparent h-5 w-1/4 blur-sm" />
      <div className="absolute left-1/2 -translate-x-1/2 top-(--top) bg-gradient-to-r from-transparent via-primary-3 to-transparent h-px w-1/4" />

      <Sparkles
        backgroundColor="transparent"
        className="absolute w-full h-(--height) top-(--top)"
        maxSize={1.2}
        minSize={0.4}
        particleColor="#fff"
        particleDensity={2500}
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute w-full h-(--height) top-(--top) bg-bg mask-radial-at-top mask-radial-[40%_120%] mask-radial-from-transparent mask-radial-from-20% mask-radial-to-white" />
    </div>
  </>
)


export default WithSparkles
