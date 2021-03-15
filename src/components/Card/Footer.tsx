import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { GenericAction, GenericActionOrList } from '@/types'

import styled from '@/styles'

import Action from '@/components/Action'
import Stack from '@/components/Stack'

const Wrapper = styled(Stack, {
  padding: '0 20px 20px'
})

export type Props = PropsWithChildren<{
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  primaryAction?: GenericAction
  secondaryActions?: GenericActionOrList[]
}>

const Footer = ({ children, justify, primaryAction, secondaryActions }: Props) => {
  return (
    <Wrapper justify={justify}>
      {children}
      {secondaryActions &&
        <Stack justify='end'>
          {secondaryActions.map((action, idx) => (
            <Action.Button
              key={idx}
              action={action}
              appearance='outline'
            />
          ))}
        </Stack>
      }
      {primaryAction &&
        <Action.Button
          action={primaryAction}
          appearance='primary'
        />
      }
    </Wrapper>
  )
}

Footer.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Card.Footer.Wrapper)'

export default Footer
