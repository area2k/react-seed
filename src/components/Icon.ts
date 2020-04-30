import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { withDefaultProps } from '@/util/styles'

interface Props {
  color: string
  fontSize?: number
}

const Icon = styled(FontAwesomeIcon).withConfig<Props>({
  shouldForwardProp: (prop) => prop !== 'fontSize'
})`
  color: ${p => p.color};

  font-size: ${p => p.fontSize ? `${p.fontSize}rem` : 'inherit'};
`

export default withDefaultProps(Icon, {
  color: 'inherit'
})
