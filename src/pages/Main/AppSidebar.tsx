import React from 'react'

// import useTranslate from '@/hooks/useTranslate'

import Icon from '@/components/Icon'
import Sidebar, { Group, Item, Title } from '@/components/Sidebar'

const AppSidebar = () => {
  // const translate = useTranslate({ prefix: 'sidebar' })

  return (
    <Sidebar>
      <Group>
        <Item exact to='/'>
          <Icon icon={{ iconName: 'home', prefix: 'far' }} />
          Home
        </Item>
      </Group>
    </Sidebar>
  )
}

export default AppSidebar
