import { PropsWithChildren, ReactNode } from 'react'

import { GenericAction, GenericActionOrList } from '@/types'

import styled from '@/styles'

import Action from '@/components/Action'
import SingleColumnLayout, { Props as SingleColumnLayoutProps } from '@/components/SingleColumnLayout'
import Stack from '@/components/Stack'
import { Title } from '@/components/Typography'

const Header = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  padding: '32px 0 0'
})

type Props = SingleColumnLayoutProps & {
  primaryAction?: GenericAction
  secondaryActions?: GenericActionOrList[]
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
                  <Action.Button
                    action={action}
                    appearance='clear'
                  />
                ))}
              </>
            }
            {primaryAction &&
              <Action.Button
                action={primaryAction}
                appearance='primary'
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
