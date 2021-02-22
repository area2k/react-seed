import { FC, useCallback, useState } from 'react'

import styled from '@/styles'

import Text from '@/elements/Text'

import Popover, { Props as PopoverProps } from '@/components/Popover'

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
  forceActive?: boolean
  text: string
}

const Tooltip: FC<Props> = ({ align = 'below', children, forceActive = false, justify = 'center', text, ...rest }) => {
  const [isActive, setIsActive] = useState(false)

  const setActive = useCallback(() => setIsActive(true), [])
  const setInactive = useCallback(() => setIsActive(false), [])

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      onMouseEnter={setActive}
      onMouseLeave={setInactive}
    >
      {children}
      <Popover
        {...rest}
        disableClickout
        align={align}
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
