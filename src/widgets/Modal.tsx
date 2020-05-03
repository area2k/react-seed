import React from 'react'
import styled from 'styled-components'

import Card, { Body, Header } from '@/components/Card'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

import { grey800 } from '@/theme/colors'
import { cardShadow, raisedMore, wideShadow } from '@/theme/shadows'
import { boldWeight } from '@/theme/typography'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: ${cardShadow};
`

interface Props {
  title: string
  onClose: () => void
}

// TODO: add click outside behavior

const Modal: React.FC<Props> = ({ children, title, onClose }) => (
  <Wrapper>
    <Card>
      <Header>
        <Text uppercase color={grey800} size={0.75} weight={boldWeight}>
          {title}
        </Text>
        <IconButton
          padding={0.875}
          size={0.875}
          onClick={onClose}
        >
          <Icon icon={{ iconName: 'times', prefix: 'far' }} />
        </IconButton>
      </Header>
      <Body>
        {children}
      </Body>
    </Card>
  </Wrapper>
)

export default Modal
