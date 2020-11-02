import { FC } from 'react'

import styled from '@/styles'

const GUTTER_WIDTH = '1rem'

const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateAreas: '"lgutter content rgutter"',
  gridTemplateColumns: `${GUTTER_WIDTH} 1fr ${GUTTER_WIDTH}`,

  mediaSmallDesktop: {
    gridTemplateColumns: '1fr 40rem 1fr'
  },

  variants: {
    size: {
      sm: {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr 32rem 1fr'
        }
      },
      md: {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr 40rem 1fr'
        }
      },
      lg: {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr 48rem 1fr'
        }
      }
    }
  }
})

const Content = styled('div', {
  gridArea: 'content'
})

type Props = {
  size?: 'sm' | 'md' | 'lg'
}

const SingleColumnLayout: FC<Props> = ({ children, size = 'md' }) => {
  return (
    <Wrapper size={size}>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

export default SingleColumnLayout
