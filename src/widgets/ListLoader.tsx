import React, { ReactElement } from 'react'

import { Body } from '@/components/Card'
import Text from '@/components/Text'

interface Props {
  empty: boolean
  list: ReactElement | ReactElement[]
}

const ListLoader = ({ list, empty }: Props) => (
  empty ?
    <Body>
      <Text color='grey600' size={0.875}>
        <em>No items</em>
      </Text>
    </Body>
  :
    list
)

export default ListLoader