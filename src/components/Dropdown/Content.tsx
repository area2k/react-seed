import { ComponentProps, FC, useCallback } from 'react'

import Popover from '@/components/Popover'

import useDropdownContext from './context'

type PopoverProps = Pick<ComponentProps<typeof Popover>, 'align' | 'justify'>

const Content: FC<PopoverProps> = (props) => {
  const { id, isOpen, setIsOpen } = useDropdownContext()

  const close = useCallback(() => setIsOpen(false), [])

  return (
    <Popover
      {...props}
      id={id}
      isOpen={isOpen}
      onRequestClose={close}
    />
  )
}

export default Content
