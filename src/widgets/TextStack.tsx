import React from 'react'

import Flex from '@/components/Flex'
import Text from '@/components/Text'

interface Props {
  align?: 'flex-start' | 'center' | 'flex-end'
  subtitle: string
  title: string
}

const TextStack = ({ align = 'flex-start', subtitle, title }: Props) => (
  <Flex align={align} direction='column' gutter={0.25}>
    <Text color='grey800' size={0.875} weight={600}>
      {title}
    </Text>
    <Text color='grey600' size={0.75}>
      {subtitle}
    </Text>
  </Flex>
)

export default TextStack
