import { StitchesVariants } from '@stitches/react'
import { PropsWithChildren } from 'react'

import SingleColumn from '@/elements/SingleColumn'

export type Props = StitchesVariants<typeof SingleColumn>

const SingleColumnLayout = ({ children, ...variants }: PropsWithChildren<Props>) => {
  return (
    <SingleColumn {...variants}>
      <div style={{ gridArea: 'content' }}>
        {children}
      </div>
    </SingleColumn>
  )
}

export default SingleColumnLayout
