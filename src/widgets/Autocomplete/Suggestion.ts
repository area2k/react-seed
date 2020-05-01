import styled, { css } from 'styled-components'

import Flex from '@/components/Flex'

const activeStyles = css`
  background-color: ${p => p.theme.primary100};

  &:hover {
    background-color: ${p => p.theme.primary100};
  }
`

const Suggestion = styled(Flex)`
  padding: 0.5rem 0.75rem;

  cursor: pointer;

  font-size: 0.875rem;

  &:hover {
    background-color: ${p => p.theme.grey100};
  }

  ${p => p.active && activeStyles};
`

export default Suggestion
