import React from 'react'

import styled from '@/styles'

import Text from '@/elements/Text'

import Version from '@/components/Version'

const Wrapper = styled('footer', {
  alignItems: 'center',
  display: 'flex',
  gridArea: 'footer',
  justifyContent: 'space-between',
  marginTop: '64px',
  padding: '32px',

  backgroundColor: '$neutralA4'
})

const Footer = () => {
  return (
    <Wrapper>
      <Version size='sm' />
      <Text color='lighter' size='sm'>
        &copy; 2020 Area2K
      </Text>
    </Wrapper>
  )
}

export default Footer
