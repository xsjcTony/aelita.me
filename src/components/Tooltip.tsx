import type { FC, ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Tooltip as RadixTooltip } from 'radix-ui'
import { useState } from 'react'


type TooltipProps = {
  content: ReactNode
  children: ReactNode
  disableHoverableContent?: boolean
  shadowColor?: string
  contentWrapperDataAttributes?: Record<`data-${string}`, string>
}


const { Provider, Root, Trigger, Portal, Content } = RadixTooltip


const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  disableHoverableContent = true,
  shadowColor = '#ffffff',
  contentWrapperDataAttributes,
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const str = Object.entries(contentWrapperDataAttributes ?? {})
    .map(([key, value]) => `[${key}="${value}"]`)
    .join(',')


  return (
    <>
      <style>
        {`
          [data-radix-popper-content-wrapper]:has(${str}) {
            pointer-events: none;
          }
        `}
      </style>

      <Provider delayDuration={0} disableHoverableContent={disableHoverableContent}>
        <Root open={isOpen} onOpenChange={setIsOpen}>
          <Trigger asChild>
            {children}
          </Trigger>
          <AnimatePresence>
            {isOpen && (
              <Portal forceMount>
                <Content asChild sideOffset={10}>
                  <motion.div
                    {...contentWrapperDataAttributes}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="px-8 py-4 bg-bg rounded-lg shadow-sm drop-shadow-[0_0_0.5rem_color-mix(in_srgb,_var(--shadow-color)_80%,_transparent)]"
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
    </>
  )
}


export default Tooltip
