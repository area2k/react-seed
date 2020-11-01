import { StitchesProps } from '@stitches/react'

import Text from '@/elements/Text'

import Config from '@/config'

const Version = (props: StitchesProps<typeof Text>) => {
  return (
    <Text color='hint' {...props}>
      {Config.BUILD_VERSION}-{Config.BUILD_COMMIT} ({Config.BUILD_BRANCH})
    </Text>
  )
}

export default Version
