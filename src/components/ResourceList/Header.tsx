import styled from '@/styles'

import Card from '@/components/Card'
import { Body } from '@/components/Typography'

const Wrapper = styled('div', {
  padding: '20px 20px 16px',

  borderBottom: '1px solid $colors$neutralLightest',

  [`${Card.Section.Wrapper} + &`]: {
    borderTop: '1px solid $colors$neutralLightest'
  }
})

export type ResourceName = {
  singular: string
  plural: string
}

export type Props = {
  items: any[]
  resourceName?: ResourceName
}

const Header = ({ items, resourceName }: Props) => {
  return (
    <Wrapper>
      {resourceName &&
        <Body>
          Showing {items.length} {items.length === 1 ? resourceName.singular : resourceName.plural}
        </Body>
      }
    </Wrapper>
  )
}

Header.Wrapper = Wrapper
Wrapper.displayName = 'stitches(ResourceList.Header.Wrapper)'

export default Header
