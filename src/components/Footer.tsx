import React from 'react'

import Text from '@/elements/Text'

import styled from '@/styles'
import Version from './Version'

const Wrapper = styled('footer', {
  alignItems: 'center',
  display: 'flex',
  gridArea: 'footer',
  justifyContent: 'space-between',
  padding: '2rem'
})

const Footer = () => {
  return (
    <Wrapper>
      <Version color='hint' size='sm' />
      <Text color='hint' size='sm'>
        &copy; 2020 Area2K
      </Text>
    </Wrapper>
  )
}

export default Footer
