import React, { ReactElement, ReactNode } from 'react'

import { show } from '@/state/modal'

interface Props {
  children: ReactNode
  component: ReactElement<any, any>
  props?: object
}

const ModalOpener = ({ children, component, props = {} }: Props) => (
  React.cloneElement(children, {
    onClick: () => show(component, props)
  })
)

export default ModalOpener
