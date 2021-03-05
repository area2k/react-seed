import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react'

import { PressableAction } from '@/types'

import styled from '@/styles'

import Button from '@/components/Button'
import Stack from '@/components/Stack'

const Wrapper = styled(Stack, {
  padding: '0 20px 20px'
})

export type Props = PropsWithChildren<{
  actions?: PressableAction[]
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  title?: ReactNode
}>

const Footer = ({ actions, children, justify }: Props) => {
  return (
    <Wrapper justify={justify}>
      {children}
      {actions &&
        <Stack justify='end'>
          {actions.map((action, idx) => (
            <Button
              key={idx}
              appearance={action.appearance}
              disabled={action.disabled}
              status={action.status}
              text={action.label}
              onClick={action.onAction}
            />
          ))}
        </Stack>
      }
    </Wrapper>
  )
}

Footer.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Card.Footer.Wrapper)'

export default Footer
