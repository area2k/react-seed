import React from 'react'

import Text from '@/elements/Text'

import styled from '@/styles'

const Wrapper = styled('footer', {
  alignItems: 'center',
  display: 'flex',
  gridArea: 'footer',
  justifyContent: 'center',
  padding: '2rem'
})

const Footer = () => {
  return (
    <Wrapper>
      <Text weight='bold'>
        &copy; 2020 Area2K
      </Text>
    </Wrapper>
  )
}

export default Footer
