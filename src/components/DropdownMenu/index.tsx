import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Fragment, useCallback } from 'react'

import { CallbackAction, GenericAction } from '@/types'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

import Dropdown, { Props as DropdownProps } from '@/components/Dropdown'

import Item from './Item'

// import { KeyNames } from '@/util/constants'
import { noOp } from '@/util/actions'

const Wrapper = styled('ul', {
  display: 'block',
  padding: '4px 0',

  listStyle: 'none'
})

Wrapper.displayName = 'stitches(DropdownMenu.Wrapper)'

const Separator = styled('li', {
  display: 'block',
  height: '1px',
  margin: '6px 0',

  borderBottom: '1px solid $colors$neutralLightest'
})

Separator.displayName = 'stitches(DropdownMenu.Separator)'

export type Props = Omit<DropdownProps, 'Content'> & {
  actions: GenericAction[][]
  disableCloseOnClick?: boolean
}
``
const DropdownMenu = ({ actions, disableCloseOnClick = false, ...props }: Props) => {
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
            {actions.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                {/* {group.map((action, itemIndex) => (
                  <Item
                    key={`item-${groupIndex}-${itemIndex}`}
                    aria-label={action.label}
                    role='menuitem'
                    tabIndex={0}
                    onClick={pauseEvent(() => {
                      action.onAction()
                      if (!disableCloseOnClick) closeDropdown()
                    })}
                  >
                    {action.icon &&
                      <Text color='inherit' size='md'>
                        <Icon fixedWidth icon={action.icon} />
                      </Text>
                    }
                    <Text color='inherit' size='md' weight='inherit'>
                      {action.label}
                    </Text>
                  </Item>
                ))} */}
                {group.map((action, itemIndex) => (
                  <Item
                    key={`item-${groupIndex}-${itemIndex}`}
                    action={action}
                    onAction={disableCloseOnClick ? noOp : closeDropdown}
                  />
                ))}
                {groupIndex < actions.length - 1 &&
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
