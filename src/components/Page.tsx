import { PropsWithChildren, ReactNode } from 'react'

import { GenericAction, GenericActionOrList } from '@/types'

import styled from '@/styles'

import Action from '@/components/Action'
import Breadcrumbs, { Props as BreadcrumbsProps} from '@/components/Breadcrumbs'
import SingleColumnLayout, { Props as SingleColumnLayoutProps } from '@/components/SingleColumnLayout'
import Stack from '@/components/Stack'
import { Subheading, Title } from '@/components/Typography'

const Header = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  padding: '32px 0 0'
})

const listOptions = { justify: 'right' } as const

export type Props = SingleColumnLayoutProps & {
  breadcrumbs?: BreadcrumbsProps['crumbs']
  primaryAction?: GenericAction
  secondaryActions?: GenericActionOrList[]
  subtitle?: ReactNode
  title?: ReactNode
}

const Page = ({ breadcrumbs, secondaryActions, children, primaryAction, size = 'lg', subtitle, title, ...variants }: PropsWithChildren<Props>) => {
  const hasHeader = subtitle || title || primaryAction
    || (secondaryActions && secondaryActions.length > 0)
    || (breadcrumbs && breadcrumbs.length > 0)

  return (
    <SingleColumnLayout size={size} {...variants}>
      {hasHeader &&
        <Header>
          <Stack vertical gap={2}>
            {breadcrumbs && breadcrumbs.length > 0 &&
              <Breadcrumbs crumbs={breadcrumbs} />
            }
            {typeof title === 'string'
              ? <Title>
                  {title}
                </Title>
              : title === undefined ? null : title
            }
            {typeof subtitle === 'string'
              ? <Subheading color='light'>
                  {subtitle}
                </Subheading>
              : subtitle === undefined ? null : subtitle
            }
          </Stack>
          <Stack gap={8} justify='end'>
            {secondaryActions &&
              <>
                {secondaryActions.map((action) => (
                  <Action.Button
                    action={action}
                    appearance='clear'
                    listOptions={listOptions}
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

Page.Header = Header
Header.displayName = 'stitches(Page.Header)'

export default Page
