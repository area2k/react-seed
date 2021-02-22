import { ComponentProps } from 'react'

import Text from '@/elements/Text'

import Config from '@/config'

const Version = (props: ComponentProps<typeof Text>) => {
  return (
    <Text color='lighter' {...props}>
      {Config.BUILD_VERSION}-{Config.BUILD_COMMIT} ({Config.BUILD_BRANCH})
    </Text>
  )
}

export default Version
