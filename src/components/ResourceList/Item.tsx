import { PropsWithChildren, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { GenericAction, RouterLocationDescriptor } from '@/types'

import styled from '@/styles'

import Action from '@/components/Action'
import Stack from '@/components/Stack'

const Wrapper = styled(Link, {
  alignItems: 'center',
  columnGap: '20px',
  display: 'flex',
  padding: '12px 20px',

  cursor: 'pointer',

  textDecoration: 'none',

  '& + &': {
    borderTop: '1px solid $colors$neutralLightest'
  },

  '&:hover': {
    backgroundColor: '$neutralA2'
  }
})

const ActionsDrawer = styled('div', {
  position: 'absolute',
  right: 20,

  variants: {
    persistent: {
      true: {
        display: 'block'
      },
      false: {
        display: 'none',

        [`${Wrapper}:hover &`]: {
          display: 'block'
        }
      }
    }
  },

  defaultVariants: {
    persistent: false
  }
})

export type Props = {
  actions?: GenericAction[]
  media?: ReactNode
  persistActions?: boolean
  to: RouterLocationDescriptor
}

const Item = ({ actions, children, media = null, persistActions = false, to }: PropsWithChildren<Props>) => {
  const hasPrefix = media

  return (
    <Wrapper to={to}>
      {hasPrefix &&
        <div>
          {media}
        </div>
      }
      <div style={{ flex: '1 1 100%' }}>
        {children}
      </div>
      {actions && actions.length > 0 &&
        <ActionsDrawer persistent={persistActions}>
          <Stack inline>
            {actions.map((action) => (
              <Action
                stopEvent
                appearance={persistActions ? 'plain' : 'outline'}
                action={action}
              />
            ))}
          </Stack>
        </ActionsDrawer>
      }
    </Wrapper>
  )
}

export default Item
