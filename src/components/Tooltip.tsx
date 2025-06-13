import type { FC, ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Tooltip as RadixTooltip } from 'radix-ui'
import { useState } from 'react'


type TooltipProps = {
  content: ReactNode
  children: ReactNode
  shadowColor?: string
}


const { Provider, Root, Trigger, Portal, Content } = RadixTooltip


const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  shadowColor = '#ffffff',
}) => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <Provider delayDuration={0}>
      <Root open={isOpen} onOpenChange={setIsOpen}>
        <Trigger asChild>
          {children}
        </Trigger>
        <AnimatePresence>
          {isOpen && (
            <Portal forceMount>
              <Content asChild sideOffset={10}>
                <motion.div
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="px-8 py-4 bg-bg rounded-lg shadow-sm drop-shadow-[0_0_0.4rem_color-mix(in_srgb,_var(--shadow-color)_40%,_transparent)]"
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  style={{ '--shadow-color': shadowColor }}
                >
                  {content}
                </motion.div>
              </Content>
            </Portal>
          )}
        </AnimatePresence>
      </Root>
    </Provider>
  )
}


export default Tooltip
