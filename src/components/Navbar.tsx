import styled from '@/styles'

import Text from '@/elements/Text'

const Wrapper = styled('div', {
  display: 'flex',

  backgroundColor: 'white',
  boxShadow: '0 1px $NA12'
})

Wrapper.displayName = 'Navbar-Wrapper'

const Branding = styled('div', {
  alignItems: 'center',
  display: 'flex',
  padding: '0 1.25rem',
  width: '18rem',

  overflow: 'hidden'
})

Branding.displayName = 'Navbar-Branding'

const Navbar = () => {
  return (
    <Wrapper>
      <Branding>
        <Text>
          Area2K Product
        </Text>
      </Branding>
    </Wrapper>
  )
}

export default Navbar
