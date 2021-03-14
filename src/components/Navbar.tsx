import { faGithub } from '@fortawesome/free-brands-svg-icons'

import styled from '@/styles'

import Text from '@/elements/Text'

import IconicButton from '@/components/IconicButton'

const Wrapper = styled('div', {
  display: 'flex',
  height: '48px',
  alignItems: 'center',

  backgroundColor: '$themeInk',
  // boxShadow: '0 0 4px 4px $colors$neutralA12',
  color: 'white'
})

Wrapper.displayName = 'stitches(Navbar.Wrapper)'

const Branding = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 20px',
  width: '256px',

  overflow: 'hidden'
})

Branding.displayName = 'stitches(Navbar.Branding)'

const Navbar = () => {
  return (
    <Wrapper>
      <Branding>
        <Text color='inherit' size='lg' weight='semibold'>
          Area2K Product Logo
        </Text>
      </Branding>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '32px' }}>
        <IconicButton
          as='a'
          appearance='clear'
          href='https://github.com/area2k/react-seed'
          icon={faGithub}
          size='lg'
          status='hi-contrast'
        />
      </div>
    </Wrapper>
  )
}

export default Navbar
