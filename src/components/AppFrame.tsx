import { FC, ReactNode } from 'react'

import styled from '@/styles'

const NAVBAR_HEIGHT = '48px'
const MOBILE_NAVBAR_HEIGHT = '64px'

const SIDEBAR_WIDTH = '256px'

const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateAreas: '"navbar" "content" "footer"',
  gridTemplateColumns: '100vw',
  gridTemplateRows: `${MOBILE_NAVBAR_HEIGHT} 1fr auto`,
  height: '100%',

  overflowX: 'hidden',

  '@smallDesktop': {
    gridTemplateAreas: '"navbar navbar" "sidebar content" "sidebar footer"',
    gridTemplateColumns: `${SIDEBAR_WIDTH} 1fr`,
    gridTemplateRows: `${NAVBAR_HEIGHT} 1fr auto`
  }
})

const NavbarContainer = styled('nav', {
  display: 'flex',
  gridArea: 'navbar',

  zIndex: '$navbar',

  '& > *': {
    flex: 1
  },

  '@smallDesktop': {
    height: NAVBAR_HEIGHT,

    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  }
})

const SidebarContainer = styled('aside', {
  display: 'none',
  width: SIDEBAR_WIDTH,

  backgroundColor: 'white',
  boxShadow: '0 1px 2px 0 $colors$neutralA12',

  bottom: 0,
  left: 0,
  position: 'fixed',
  top: NAVBAR_HEIGHT,

  overflowY: 'auto',

  zIndex: '$sidebar',

  '& > *': {
    flex: 1
  },

  '@smallDesktop': {
    display: 'flex'
  }
})

type Props = {
  Footer: ReactNode,
  Navbar: ReactNode,
  Sidebar: ReactNode
}

const AppFrame: FC<Props> = ({ children, Footer, Navbar, Sidebar }) => {
  return (
    <Wrapper>
      <NavbarContainer>
        {Navbar}
      </NavbarContainer>
      <SidebarContainer>
        {Sidebar}
      </SidebarContainer>
      <section style={{ gridArea: 'content' }}>
        {children}
      </section>
      <footer style={{ gridArea: 'footer' }}>
        {Footer}
      </footer>
    </Wrapper>
  )
}

export default AppFrame
