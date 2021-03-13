import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react'

import { GenericAction } from '@/types'

import styled from '@/styles'

import Action from '@/components/Action'
import Stack from '@/components/Stack'
import { Subheading } from '@/components/Typography'

const Wrapper = styled(Stack, {
  padding: '20px 20px 0'
})

export type Props = PropsWithChildren<{
  actions?: GenericAction[]
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
            <Action
              key={idx}
              action={action}
              appearance='plain'
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
