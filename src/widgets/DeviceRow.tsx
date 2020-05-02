import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { toDate } from 'date-fns-tz'
import React, { ReactText } from 'react'
import parseUA from 'ua-parser-js'

import { danger100, danger800, grey800 } from '@/theme/colors'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import { Cell, Row } from '@/components/Table'
import Text from '@/components/Text'

import TextStack from '@/widgets/TextStack'

import { format } from '@/util/date'

const deviceIcon = (userAgent) => {
  switch (userAgent.device.type) {
    case 'mobile':
      return 'mobile'
    case 'tablet':
      return 'tablet'
    case 'wearable':
      return 'watch-calculator'
    case 'smarttv':
      return 'tv'
    default:
      return 'laptop'
  }
}

interface Device {
  appVersion: string
  id: ReactText
  expiresAt: number
  lastIssuedAt: number
  platform: string
  userAgent: {
    browser: {
      name: string
      version: ReactText
    }
    os: {
      name: string
    }
  }
}

interface Props {
  device: Device
  onClick: () => {}
}

const DeviceRow = ({ device, onClick }: Props) => {
  const userAgent = parseUA(device.userAgent)
  const iconName = deviceIcon(userAgent)

  return (
    <Row key={device.id}>
      <Cell>
        {userAgent.ua === '<unknown>'
          ? <Flex gutter={1.5}>
              <Text color={grey800} size={1.25}>
                <Icon fixedWidth name='question-square' prefix='far' />
              </Text>
              <TextStack
                subtitle='Unknown browser'
                title='Unknown device'
              />
            </Flex>
          : <Flex gutter={1.5}>
              <Text color={grey800} size={1.25}>
                <Icon fixedWidth name={iconName} prefix='far' />
              </Text>
              <TextStack
                subtitle={`${userAgent.browser.name} ${userAgent.browser.version}`}
                title={userAgent.os.name}
              />
            </Flex>
        }
      </Cell>
      <Cell>
        <TextStack
          subtitle={device.appVersion}
          title={device.platform}
        />
      </Cell>
      <Cell>
        {formatDistanceToNow(toDate(device.lastIssuedAt))} ago
      </Cell>
      <Cell>
        {format(new Date(device.expiresAt * 1000), 'LLL do HH:mm:ss zzz')}
      </Cell>
      <Cell right>
        <IconButton
          hoverBg={danger100}
          hoverColor={danger800}
          padding={0.875}
          size={0.875}
          onClick={onClick}
        >
          <Icon name='ban' prefix='far' />
        </IconButton>
      </Cell>
    </Row>
  )
}

export default DeviceRow
