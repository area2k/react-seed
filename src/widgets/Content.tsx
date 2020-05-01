import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
  padding-bottom: ${p => p.padBottom}rem;
  padding-top: ${p => p.padTop}rem;

  background-color: ${p => p.theme[p.bgColor]};

  @media(${p => p.theme.screens.smallDesktop}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const CenterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
`

const Inner = styled.div`
  max-width: ${p => p.width}rem;
  width: 100%;
`

interface Props {
  bgColor?: string
  full?: boolean
  padBottom?: number
  padTop?: number
  width?: number
}

const Content: React.FC<Props> = ({
  bgColor = 'transparent', children, full = false, width = 74, padBottom = 0, padTop = 0
}) => {
  if (full) {
    return (
      <Wrapper
        bgColor={bgColor}
        padBottom={padBottom}
        padTop={padTop}
      >
        {children}
      </Wrapper>
    )
  }

  return (
    <CenterWrapper
      bgColor={bgColor}
      padBottom={padBottom}
      padTop={padTop}
    >
      <Inner width={width}>
        {children}
      </Inner>
    </CenterWrapper>
  )
}

export default Content
