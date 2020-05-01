import React from 'react'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import SubtleLink from '@/components/SubtleLink'
import Text from '@/components/Text'
import UnderlineButton from '@/components/UnderlineButton'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 0 3rem;
`

const Subactions = styled(Flex)`
  margin-left: -0.875rem;
`

const Back = styled(UnderlineButton)`
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;

  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  word-spacing: 2px;
`

interface Props {
  actions?: []
  back?: string
  backTo?: string
  title?: string
  subactions?: []
}

const PageHeader = ({ actions, back, backTo, title, subactions }: Props) => (
  <Wrapper>
    <Flex align='flex-start' direction='column'>
      {back &&
        <Back
          small
          as={SubtleLink}
          color='grey500'
          hoverColor='grey700'
          to={backTo}
        >
          <Icon name='arrow-left' prefix='far' />
          {back}
        </Back>
      }
      <Text color='grey800' size={2.25} weight={600}>
        {title}
      </Text>
      {subactions &&
        <Subactions gutter={0.5}>
          {subactions}
        </Subactions>
      }
    </Flex>
    <Flex>
      {actions}
    </Flex>
  </Wrapper>
)

export default PageHeader
