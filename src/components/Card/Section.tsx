import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react'

import { PressableAction } from '@/types'

import styled from '@/styles'

import Button from '@/components/Button'
import Stack from '@/components/Stack'
import { Caption } from '@/components/Typography'

const Wrapper = styled('div', {
  padding: '20px',

  '& + &': {
    borderTop: '1px solid $colors$neutralLightest'
  },

  variants: {
    flush: {
      true: {
        padding: 0
      },
      false: {}
    },
    subdued: {
      true: {
        backgroundColor: '$neutralA2'
      },
      false: {}
    }
  }
})

const Title = styled(Stack, {
  paddingBottom: '12px'
})

export type Props = PropsWithChildren<{
  actions?: PressableAction[]
  flush?: boolean
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  subdued?: boolean
  title?: ReactNode
}>

const Section = ({ actions, children, flush, subdued, title }: Props) => {
  const hasTitleBar = title || (actions && actions.length > 0)

  return (
    <Wrapper flush={flush} subdued={subdued}>
      {hasTitleBar &&
        <Title justify='apart'>
          <div style={{ flex: '0 1 100%' }}>
            {title &&
              <Caption>
                {title}
              </Caption>
            }
          </div>
          {actions &&
            <Stack justify='end'>
              {actions.map((action, idx) => (
                <Button
                  key={idx}
                  appearance='plain'
                  disabled={action.disabled}
                  status={action.status}
                  text={action.label}
                  onClick={action.onAction}
                />
              ))}
            </Stack>
          }
        </Title>
      }
      {children}
    </Wrapper>
  )
}

Section.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Card.Section.Wrapper)'

export default Section
