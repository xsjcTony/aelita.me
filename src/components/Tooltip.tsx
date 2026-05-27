import type { FC, ReactNode } from 'react'
import { Tooltip as BaseTooltip } from '@base-ui/react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'


type TooltipProps = {
  content: ReactNode
  children: ReactNode
  disableHoverablePopup?: boolean
  shadowColor?: string
  contentWrapperDataAttributes?: Record<`data-${string}`, string>
}


const { Provider, Root, Trigger, Portal, Positioner, Popup } = BaseTooltip


const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  disableHoverablePopup = true,
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

      <Provider delay={0}>
        <Root disableHoverablePopup={disableHoverablePopup} open={isOpen} onOpenChange={setIsOpen}>
          <Trigger>
            {children}
          </Trigger>
          <AnimatePresence>
            {isOpen && (
              <Portal keepMounted>
                <Positioner sideOffset={10}>
                  <Popup
                    render={(
                      <motion.div
                        {...contentWrapperDataAttributes}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="px-8 py-4 bg-bg rounded-lg shadow-sm drop-shadow-[0_0_0.5rem_color-mix(in_srgb,var(--shadow-color)_80%,transparent)]"
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        style={{ '--shadow-color': shadowColor }}
                      >
                        {content}
                      </motion.div>
                    )}
                  />
                </Positioner>
              </Portal>
            )}
          </AnimatePresence>
        </Root>
      </Provider>
    </>
  )
}


export default Tooltip
