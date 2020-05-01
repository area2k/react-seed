import React from 'react'

import Card, { Body, Header } from '@/components/Card'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

interface Props {
  title: string,
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, title, onClose }) => (
  <Card>
    <Header>
      <Text uppercase color='grey800' size={0.75} weight={600}>
        {title}
      </Text>
      <IconButton
        padding={0.875}
        size={0.875}
        onClick={onClose}
      >
        <Icon name='times' prefix='far' />
      </IconButton>
    </Header>
    <Body>
      {children}
    </Body>
  </Card>
)

export default Modal
