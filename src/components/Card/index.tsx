import { forwardRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from 'react'

import styled from '@/styles'

import Footer, { Props as FooterProps } from './Footer'
import Header, { Props as HeaderProps } from './Header'
import Section from './Section'

const Wrapper = styled('div', {
  width: '100%',

  backgroundColor: 'white',
  borderRadius: '$lg',
  boxShadow: '$1',

  '&:first-child': {
    borderTopLeftRadius: '$lg',
    borderTopRightRadius: '$lg'
  },

  '&:last-child': {
    borderBottomLeftRadius: '$lg',
    borderBottomRightRadius: '$lg'
  }
})

export type Props = PropsWithChildren<{
  actions?: HeaderProps['actions']
  primaryFooterAction?: FooterProps['primaryAction']
  secondaryFooterActions?: FooterProps['secondaryActions']
  sectioned?: boolean
  title?: HeaderProps['title']
}>

type CardType = ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>> & {
  Footer: typeof Footer
  Header: typeof Header
  Section: typeof Section
}

const Card = forwardRef<HTMLDivElement>(({ actions, children, primaryFooterAction, secondaryFooterActions, sectioned, title }: Props, ref) => {
  const hasHeader = title || (actions && actions.length > 0)
  const hasFooter = primaryFooterAction || (secondaryFooterActions && secondaryFooterActions.length > 0)

  return (
    <Wrapper ref={ref}>
      {hasHeader &&
        <Header
          actions={actions}
          title={title}
        />
      }
      {sectioned
        ? <Section>
            {children}
          </Section>
        : children
      }
      {hasFooter &&
        <Footer
          primaryAction={primaryFooterAction}
          secondaryActions={secondaryFooterActions}
        />
      }
    </Wrapper>
  )
}) as CardType

Card.Footer = Footer
Card.Header = Header
Card.Section = Section

export default Card
