import { Children, cloneElement, ReactElement, useCallback, useState } from 'react'

import styled from '@/styles'

import Text from '@/elements/Text'

import Popover, { Props as PopoverProps } from '@/components/Popover'

import { KeyNames } from '@/util/constants'

const Wrapper = styled('div', {
  padding: '2px 8px',

  backgroundColor: '$neutralDarkest',
  borderRadius: '$lg',
  boxShadow: '$3',

  lineHeight: 0,
  whiteSpace: 'nowrap'
})

type HoistedPopoverProps = Pick<PopoverProps, 'align' | 'id' | 'justify'>

type Props = HoistedPopoverProps & {
  children: ReactElement,
  forceActive?: boolean
  text: string
}

const Tooltip = ({ align = 'below', children, forceActive = false, id, justify = 'center', text, ...rest }: Props) => {
  const [isActive, setIsActive] = useState(false)

  const setActive = useCallback(() => setIsActive(true), [])
  const setInactive = useCallback(() => setIsActive(false), [])

  const handleKeyCommands = useCallback((ev: React.KeyboardEvent<HTMLDivElement>) => {
    // https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-21
    if (ev.key === KeyNames.Escape) {
      ev.stopPropagation()
      setInactive()
    }
  }, [])

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      onKeyDown={handleKeyCommands}
    >
      {cloneElement(Children.only(children), {
        'aria-describedby': id,
        onBlur: setInactive,
        onFocus: setActive,
        onMouseEnter: setActive,
        onMouseLeave: setInactive
      })}
      <Popover
        {...rest}
        disableClickout
        align={align}
        id={id}
        isOpen={forceActive || isActive}
        justify={justify}
        role='tooltip'
        onRequestClose={() => undefined}
      >
        <Wrapper>
          <Text color='hi-contrast' size='sm'>
            {text}
          </Text>
        </Wrapper>
      </Popover>
    </div>
  )
}

export default Tooltip
