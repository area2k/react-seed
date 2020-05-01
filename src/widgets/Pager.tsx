import React from 'react'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import UnderlineButton from '@/components/UnderlineButton'

import { boldWeight } from '@/theme/typography'

interface Props {
  page: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
}

const Pager = ({ page, totalPages, onNext, onPrevious }: Props) => {
  // const translate = useTranslate({ prefix: 'pager' })

  return (
    <Flex gutter={1.5} justify='space-around'>
      <UnderlineButton
        disabled={page === 1}
        fontSize={0.75}
        onClick={onPrevious}
      >
        <Icon
          icon={{ iconName: 'arrow-left', prefix: 'far' }}
          rMargin={0.625}
        />
        Previous
      </UnderlineButton>
      <Text size={0.875} weight={boldWeight}>
        Page {page} of {totalPages}
      </Text>
      <UnderlineButton
        disabled={page === totalPages}
        fontSize={0.75}
        onClick={onNext}
      >
        Next
        <Icon
          icon={{ iconName: 'arrow-right', prefix: 'far' }}
          lMargin={0.625}
        />
      </UnderlineButton>
    </Flex>
  )
}

export default Pager
