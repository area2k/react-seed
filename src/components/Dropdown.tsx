import { Children, cloneElement, FC, ReactElement, useCallback, useState } from 'react'

import styled from '@/styles'

import Popover, { Props as PopoverProps } from '@/components/Popover'

import { KeyNames } from '@/util/constants'
import { pauseEvent } from '@/util/events'

const Wrapper = styled('div', {
  backgroundColor: 'white',
  borderRadius: '$lg',
  boxShadow: '$3'
})

type OmittedPopoverProps = Omit<PopoverProps, 'isOpen' | 'onRequestClose'>

type ContentProps = {
  isOpen: boolean
  closeDropdown: () => void
}

export type Props = OmittedPopoverProps & {
  children: ReactElement<any, any>
  forceOpen?: boolean
  Content: FC<ContentProps>
}

const Dropdown = ({ align = 'below', children, forceOpen, justify = 'left', size = 'parent', Content, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = useCallback(() => setIsOpen((prevState) => !prevState), [])
  const setClosed = useCallback(() => setIsOpen(false), [])

  const handleKeyCommands = useCallback((ev: React.KeyboardEvent<HTMLDivElement>) => {
    // https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-12
    if (ev.key === KeyNames.Escape) {
      ev.stopPropagation()
      setClosed()
    }
  }, [])

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      onKeyDown={handleKeyCommands}
    >
      {cloneElement(Children.only(children), {
        'aria-haspopup': true,
        'aria-expanded': forceOpen || isOpen,
        onClick: pauseEvent(toggleIsOpen)
      })}
      <Popover
        {...rest}
        align={align}
        isOpen={forceOpen || isOpen}
        justify={justify}
        role='menu'
        size={size}
        onRequestClose={setClosed}
      >
        <Wrapper>
          {Content({ isOpen, closeDropdown: setClosed })}
        </Wrapper>
      </Popover>
    </div>
  )
}

Dropdown.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Dropdown.Wrapper)'

export default Dropdown
