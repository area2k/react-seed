import React from 'react'

import { grey700 } from '@/theme/colors'

import useTranslate from '@/hooks/useTranslate'

import Button from '@/components/Button'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

interface Props {
  page: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
}

const Pager = ({ page, totalPages, onNext, onPrevious }: Props) => {
  const translate = useTranslate({ prefix: 'pager' })

  return (
    <Flex gutter={1.5} justify='space-around'>
      <Button
        size='compact'
        disabled={page === 1}
        onClick={onPrevious}
      >
        <Icon name='arrow-left' />
        {translate('prev')}
      </Button>
      <Text color={grey700} size={0.875} weight={600}>
        {translate('page', { page, totalPages })}
      </Text>
      <Button
        size='compact'
        disabled={page === totalPages}
        onClick={onNext}
      >
        <Icon name='arrow-right' />
        {translate('next')}
      </Button>
    </Flex>
  )
}

export default Pager
