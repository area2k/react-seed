import React from 'react'
import styled from 'styled-components'

import { black48 } from '@/theme/colors'

interface WrapperProps {
  bgColor: string
}

const Wrapper = styled.div.withConfig<WrapperProps>({
  shouldForwardProp: (prop) => prop !== 'bgColor'
})`
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  background-color: ${p => p.bgColor};

  z-index: 100000;
`

interface InnerProps {
  vPadding: number
  width: number
}

const Inner = styled.div.withConfig<InnerProps>({
  shouldForwardProp: (prop) => !['vPadding', 'width'].includes(prop)
})`
  flex: 1;
  max-width: ${p => p.width}rem;
  padding: ${p => p.vPadding}rem 1rem 0;

  overflow-y: auto;

  & > *:last-child {
    margin-bottom: ${p => p.vPadding}rem;
  }
`

type Props = Partial<WrapperProps> & Partial<InnerProps>

const Overlay: React.FC<Props> = ({ children, bgColor = black48, vPadding = 8, width = 54 }) => (
  <Wrapper bgColor={bgColor}>
    <Inner vPadding={vPadding} width={width}>
      {children}
    </Inner>
  </Wrapper>
)

export default Overlay
