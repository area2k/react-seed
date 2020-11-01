import { FC } from 'react'

import Group from './Group'

import styled from '@/styles'

const Wrapper = styled('nav', {
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: 'white',
  borderRight: '1px solid $N40'
})

type Props = {}

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export { Group }
export default Sidebar
