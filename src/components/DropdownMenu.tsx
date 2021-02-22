import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Children, cloneElement, Fragment, ReactElement, useCallback, useState } from 'react'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

import Popover, { Props as PopoverProps } from '@/components/Popover'

import { pauseEvent } from '@/util/events'

const Wrapper = styled('ul', {
  display: 'block',
  minWidth: '100%',
  padding: '4px 0',

  backgroundColor: 'white',
  borderRadius: '$lg',
  boxShadow: '$3'
})

const Item = styled('li', {
  alignItems: 'center',
  display: 'flex',
  gap: '16px',
  padding: '4px 16px',

  cursor: 'pointer',
  outline: 'none',

  lineHeight: 0,

  '&:hover': {
    backgroundColor: '$themeA8',
    color: '$themeDarkest'
  },

  '&:active': {
    backgroundColor: '$themeA12'
  },

  '&:focus-visible': {
    backgroundColor: '$themeA24'
  }
})

const Separator = styled('li', {
  height: '1px',
  margin: '6px 0',

  borderBottom: '1px solid $colors$neutralLightest'
})

type HoistedPopoverProps = Pick<PopoverProps, 'align' | 'disableClickout' | 'id' | 'justify' | 'size'>

type MenuItem = { icon?: IconDefinition, text: string, onClick: () => void }

type Props = HoistedPopoverProps & {
  children: ReactElement<any, any>
  disableCloseOnClick?: boolean
  forceOpen?: boolean
  items: MenuItem[][]
}

const DropdownMenu = ({ align = 'top', children, disableCloseOnClick = false, forceOpen, items, justify = 'left', size = 'parent', ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = useCallback(() => setIsOpen((prevState) => !prevState), [])
  const setClosed = useCallback(() => setIsOpen(false), [])

  const closeAfter = useCallback((onClick: () => void) => () => {
    onClick()
    if (!disableCloseOnClick) setClosed()
  }, [disableCloseOnClick])

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
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
        <Wrapper role='menu'>
          {items.map((group, groupIndex) => (
            <Fragment key={`group-${groupIndex}`}>
              {group.map((item, itemIndex) => (
                <Item
                  key={`item-${groupIndex}-${itemIndex}`}
                  aria-label={item.text}
                  role='menuitem'
                  tabIndex={0}
                  onClick={pauseEvent(closeAfter(item.onClick))}
                >
                  {item.icon &&
                    <Text color='inherit' size='md'>
                      <Icon fixedWidth icon={item.icon} />
                    </Text>
                  }
                  <Text color='inherit' size='md' weight='inherit'>
                    {item.text}
                  </Text>
                </Item>
              ))}
              {groupIndex < items.length - 1 &&
                <Separator aria-hidden role='separator' />
              }
            </Fragment>
          ))}
        </Wrapper>
      </Popover>
    </div>
  )
}

export default DropdownMenu
