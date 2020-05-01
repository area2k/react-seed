import React from 'react'

import Navbar, { Group } from '@/components/Navbar'
import Text from '@/components/Text'
import UnderlineButton from '@/components/UnderlineButton'

import { grey800 } from '@/theme/colors'
import { boldWeight } from '@/theme/typography'

const AppNavbar = () => {
  return (
    <Navbar>
      <Group>
        <Text uppercase color={grey800} size={0.75} weight={boldWeight}>
          Area2K
        </Text>
      </Group>
      <Group>
        <UnderlineButton>
          Account
        </UnderlineButton>
        <UnderlineButton>
          Log out
        </UnderlineButton>
      </Group>
    </Navbar>
  )
}

export default AppNavbar
