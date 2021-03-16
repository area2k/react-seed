import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'

import { GenericAction } from '@/types'

import styled from '@/styles'

import Icon from '@/elements/Icon'

import { Body } from '@/components/Typography'

import { isAnchorAction, isCallbackAction, isLinkAction } from '@/util/actions'
import { pauseEvent } from '@/util/events'

const Wrapper = styled('button', {
  $$focusRingColor: '$colors$themeLight',

  alignItems: 'baseline',
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  gap: '16px',
  padding: '4px 16px',
  width: '100%',

  cursor: 'pointer',
  outline: 'none',

  lineHeight: 0,
  textDecoration: 'none',
  whiteSpace: 'nowrap',

  focusPseudoElement: {
    element: 'after',
    borderRadius: 0,
    borderWidth: 0,
    ringColor: '$$focusRingColor'
  },

  '&:hover, &:focus-visible': {
    backgroundColor: '$themeA8',
    color: '$themeDarkest'
  },

  '&:active': {
    backgroundColor: '$themeA12'
  },

  '&[disabled]': {
    backgroundColor: '$neutralLightest',
    color: '$textLightest'
  },

  variants: {
    dangerous: {
      true: {
        $$focusRingColor: '$colors$dangerLight',

        color: '$dangerDefault',

        '&:hover, &:focus-visible': {
          backgroundColor: '$dangerA8',
          color: '$dangerDefault'
        }
      },
      false: {}
    }
  }
})

type Props = {
  action: GenericAction
  onAction: () => void
}

const Item = ({ action, onAction }: Props) => {
  if (isAnchorAction(action)) {
    return (
      <li>
        <Wrapper
          as='a'
          dangerous={action.dangerous}
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noopener noreferrer' : undefined}
          onClick={onAction}
        >
          {action.icon &&
            <Body color='inherit'>
              <Icon fixedWidth icon={action.icon} />
            </Body>
          }
          <Body color='inherit' weight='inherit'>
            {action.label}
          </Body>
        </Wrapper>
      </li>
    )
  } else if (isCallbackAction(action)) {
    return (
      <li>
        <Wrapper
          dangerous={action.dangerous}
          disabled={action.disabled || action.isLoading}
          onClick={pauseEvent(() => {
            action.onAction()
            onAction()
          })}
        >
          {(action.icon || action.isLoading) &&
            <Body color='inherit'>
              <Icon
                fixedWidth
                spin={action.isLoading}
                icon={action.isLoading
                  ? action.loadingIcon ? action.loadingIcon : faCircleNotch
                  : action.icon!
                }
              />
            </Body>
          }
          <Body color='inherit' weight='inherit'>
            {action.isLoading && action.loadingLabel
              ? action.loadingLabel
              : action.label
            }
          </Body>
        </Wrapper>
      </li>
    )
  } else if (isLinkAction(action)) {
    if (action.navigational) {
      return (
        <li>
          <Wrapper
            as={NavLink}
            dangerous={action.dangerous}
            end={action.end}
            to={action.to}
            onClick={onAction}
          >
            {action.icon &&
              <Body color='inherit'>
                <Icon fixedWidth icon={action.icon} />
              </Body>
            }
            <Body color='inherit' weight='inherit'>
              {action.label}
            </Body>
          </Wrapper>
        </li>
      )
    } else {
      return (
        <li>
          <Wrapper
            as={Link}
            dangerous={action.dangerous}
            to={action.to}
            onClick={onAction}
          >
            {action.icon &&
              <Body color='inherit'>
                <Icon fixedWidth icon={action.icon} />
              </Body>
            }
            <Body color='inherit' weight='inherit'>
              {action.label}
            </Body>
          </Wrapper>
        </li>
      )
    }
  } else {
    return null
  }
}

Item.Wrapper = Wrapper
Wrapper.displayName = 'stitches(DropdownMenu.Item.Wrapper)'

export default Item
