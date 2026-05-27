import type { FC, ReactElement } from 'react'
import { cloneElement } from 'react'


type AccessibleIconRootProps = {
  label: string
  children: ReactElement<{ 'aria-hidden'?: true; focusable?: false }>
}


const AccessibleIcon: FC<AccessibleIconRootProps> = ({ label, children }) => (
  <>
    {cloneElement(children, { 'aria-hidden': true, focusable: false })}
    <span className="sr-only">{label}</span>
  </>
)


export default AccessibleIcon
