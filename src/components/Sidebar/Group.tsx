import { FC } from 'react'

import Text from '@/elements/Text'

import styled from '@/styles'

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 0'
})

const Title = styled(Text, {
  margin: '0 0.5rem 0.5rem'
})

type Props = {
  title?: string
}

const Group: FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      {title &&
        <Title color='hint' size='sm'>
          {title}
        </Title>
      }
      {children}
    </Wrapper>
  )
}

export default Group
