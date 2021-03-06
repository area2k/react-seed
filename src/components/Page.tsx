import { PropsWithChildren, ReactNode } from 'react'

import { PrimaryAction, SecondaryAction } from '@/types'

import styled from '@/styles'

import SingleColumnLayout, { Props as SingleColumnLayoutProps } from '@/components/SingleColumnLayout'
import { Title } from '@/components/Typography'
import Stack from './Stack'
import Button from './Button'

const Header = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  padding: '32px 0 0'
})

type Props = SingleColumnLayoutProps & {
  primaryAction?: PrimaryAction
  secondaryActions?: SecondaryAction[]
  title?: ReactNode
}

const Page = ({ secondaryActions, children, primaryAction, size = 'lg', title, ...variants }: PropsWithChildren<Props>) => {
  const hasHeader = title || primaryAction || (secondaryActions && secondaryActions.length > 0)

  return (
    <SingleColumnLayout size={size} {...variants}>
      {hasHeader &&
        <Header>
          <Title>
            {title}
          </Title>
          <Stack gap={8} justify='end'>
            {secondaryActions &&
              <>
                {secondaryActions.map((action) => (
                  <Button
                    hasPopover
                    appearance='clear'
                    iconLeft={action.icon}
                    status={action.dangerous ? 'danger' : 'neutral'}
                    text={action.label}
                    onClick={action.onAction}
                  />
                ))}
              </>
            }
            {primaryAction &&
              <Button
                appearance='primary'
                iconLeft={primaryAction.icon}
                status={primaryAction.dangerous ? 'danger' : 'theme'}
                text={primaryAction.label}
                onClick={primaryAction.onAction}
              />
            }
          </Stack>
        </Header>
      }
      <div style={{ margin: '32px 0' }}>
        {children}
      </div>
    </SingleColumnLayout>
  )
}

export default Page
