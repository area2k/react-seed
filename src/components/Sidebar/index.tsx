import { faBug, faCog, faPlay, faProjectDiagram, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'

import Group from './Group'
import Item from './Item'

import styled from '@/styles'

const Wrapper = styled('nav', {
  display: 'flex',
  flexDirection: 'column'
})

type Props = {}

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Group>
        <Item
          icon={faTachometerAlt}
          title='Dashboard'
          to='/'
        />
      </Group>
      <Group>
        <Item
          icon={faPlay}
          title='Build'
          to='/build'
        />
        <Item
          icon={faProjectDiagram}
          title='Distribute'
          to='/distribute'
        />
        <Item
          icon={faBug}
          title='Test'
          to='/test'
        />
      </Group>
      <Group>
        <Item
          icon={faCog}
          title='Settings'
          to='/settings'
        />
      </Group>
    </Wrapper>
  )
}

export default Sidebar
