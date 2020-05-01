import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  background-color: ${p => p.theme.black48};

  z-index: ${p => p.theme.sizes.strata.modal};
`

const Inner = styled.div`
  flex: 1;
  max-width: ${p => p.width}rem;
  padding: ${p => p.padding}rem 1rem 0;

  overflow-y: auto;

  & > *:last-child {
    margin-bottom: ${p => p.padding}rem;
  }
`

interface Props {
  children: ReactElement | ReactElement[]
  padding: number
  width: number
}

const Overlay = ({ children, padding = 8, width = 54 }: Props) => (
  <Wrapper>
    <Inner padding={padding} width={width}>
      {children}
    </Inner>
  </Wrapper>
)

export default Overlay
