import { cloneElement, MouseEvent, useCallback } from 'react'

import useDropdownContext from './context'

interface ChildProps {
  'aria-expanded': boolean
  'aria-controls': string
  onClick: (ev: MouseEvent) => void
}

type Props = {
  children: React.ReactElement<ChildProps, any>
}

const Trigger = ({ children }: Props) => {
  const { id, isOpen, setIsOpen } = useDropdownContext()

  const toggle = useCallback((ev: MouseEvent) => {
    ev.stopPropagation()

    setIsOpen(wasOpen => !wasOpen)
  }, [])

  return cloneElement(children, {
    'aria-expanded': isOpen,
    'aria-controls': id,
    onClick: toggle
  })
}

export default Trigger
