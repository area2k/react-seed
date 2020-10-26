import styled from '@/styles'

const MainLayout = styled('main', {
  display: 'grid',
  gridTemplateAreas: '"navbar" "content" "footer"',
  gridTemplateColumns: '100vw',
  gridTemplateRows: '4rem 1fr auto',
  height: '100%',

  mediaSmallDesktop: {
    gridTemplateAreas: '"navbar navbar" "sidebar content" "sidebar footer"',
    gridTemplateColumns: '16rem 1fr',
    gridTemplateRows: '3rem 1fr auto'
  }
})

export default MainLayout
