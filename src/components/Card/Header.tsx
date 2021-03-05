import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react'

import { PressableAction } from '@/types'

import styled from '@/styles'

import Button from '@/components/Button'
import Stack from '@/components/Stack'
import { Subheading } from '@/components/Typography'

const Wrapper = styled(Stack, {
  padding: '20px 20px 0'
})

export type Props = PropsWithChildren<{
  actions?: PressableAction[]
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  title: ReactNode
}>

const Header = ({ actions, children, justify = 'apart', title }: Props) => {
  return (
    <Wrapper justify={justify}>
      {title &&
        <div style={{ flex: '0 1 100%' }}>
          <Subheading>
            {title}
          </Subheading>
        </div>
      }
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
      {children}
    </Wrapper>
  )
}

Header.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Card.Header.Wrapper)'

export default Header
