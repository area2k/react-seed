import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { IconName } from '@fortawesome/fontawesome-common-types'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

const activeStyles = css`
  ${Text} {
    color: ${p => p.theme.primary600};
  }

  border-color: ${p => p.theme.primary600};
`

const Wrapper = styled(NavLink)`
  padding: 0.5rem 1.5rem 0.875rem;

  border-bottom: 3px solid transparent;
  cursor: pointer;

  text-decoration: none;

  ${Text} {
    color: ${p => p.theme.grey600};
  }

  &:hover {
    border-color: ${p => p.theme.grey200};

    ${Text} {
      color: ${p => p.theme.grey700};
    }
  }

  &.active {
    ${activeStyles};
  }

  ${p => p.isActive && activeStyles};
`

interface Props {
  icon: IconName
  prefix: 'fas' | 'far' | 'fal' | 'fab'
  title: string
  to: string
}

const Tab = ({ icon, prefix, title, to }: Props) => (
  <Wrapper exact to={to}>
    <Text size={0.75}>
      <Icon
        fixedWidth
        mr={0.75}
        icon={[prefix, icon]}
      />
    </Text>
    <Text uppercase size={0.75} weight={600}>
      {title}
    </Text>
  </Wrapper>
)

export default Tab
