import { PropsWithChildren, ReactNode } from 'react'

import styled from '@/styles'

import SingleColumnLayout, { Props as SingleColumnLayoutProps } from '@/components/SingleColumnLayout'
import Stack from '@/components/Stack'
import { Title } from '@/components/Typography'

import Action from './Action'
import Display from './Display'

const defaultTitle = <Display type='title' />

const Header = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  padding: '32px 0 0'
})

export type Props = SingleColumnLayoutProps & {
  primaryAction?: boolean
  secondaryActions?: number
  title?: ReactNode
}

const Page = ({ secondaryActions = 0, children, primaryAction = false, size = 'lg', title = defaultTitle, ...variants }: PropsWithChildren<Props>) => {
  const hasHeader = title || primaryAction || secondaryActions > 0

  return (
    <SingleColumnLayout size={size} {...variants}>
      {hasHeader &&
        <Header>
          {typeof title === 'string'
            ? <Title>
                {title}
              </Title>
            : {title}
          }
          <Stack gap={8} justify='end'>
            {secondaryActions > 0 &&
              <>
                {Array.from({ length: secondaryActions }, () => (
                  <Action />
                ))}
              </>
            }
            {primaryAction &&
              <Action />
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

Page.Header = Header
Header.displayName = 'stitches(Skeleton.Page.Header)'

export default Page
