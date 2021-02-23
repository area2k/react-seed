import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Fragment, useCallback } from 'react'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

import Dropdown, { Props as DropdownProps } from '@/components/Dropdown'

import { KeyNames } from '@/util/constants'
import { pauseEvent } from '@/util/events'

const Wrapper = styled('ul', {
  display: 'block',
  padding: '4px 0'
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

type MenuItem = { icon?: IconDefinition, text: string, onClick: () => void }

type Props = Omit<DropdownProps, 'Content'> & {
  disableCloseOnClick?: boolean
  items: MenuItem[][]
}
``
const DropdownMenu = ({ disableCloseOnClick = false, items, ...props }: Props) => {
  const handleKeyCommands = useCallback((ev: React.KeyboardEvent<HTMLDivElement>) => {
    // https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-12
    switch (ev.key) {
      // TODO: menu keyboard interactions
      // case KeyNames.Up:
      //   // move focus up 1 item + wrap
      //   break;

      // case KeyNames.Down:
      //   // move focus down 1 item + wrap
      //   break;

      // case KeyNames.Enter:
      // case KeyNames.Space:
      //   // activate currently focused element if any
      //   break;
    }
  }, [])

  return (
    <Dropdown
      {...props}
      onKeyDown={handleKeyCommands}
      Content={
        ({ closeDropdown }) => (
          <Wrapper role='menu'>
            {items.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                {group.map((item, itemIndex) => (
                  <Item
                    key={`item-${groupIndex}-${itemIndex}`}
                    aria-label={item.text}
                    role='menuitem'
                    tabIndex={0}
                    onClick={pauseEvent(() => {
                      item.onClick()
                      if (!disableCloseOnClick) closeDropdown()
                    })}
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
        )
      }
    />
  )
}

export default DropdownMenu
