import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesProps } from '@stitches/react'
import { NavLink } from 'react-router-dom'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

const Wrapper = styled(NavLink, {
  alignItems: 'center',
  display: 'flex',
  padding: '0.625rem 1.25rem',

  backgroundColor: 'transparent',
  color: '$NA48',

  textDecoration: 'none',

  '& + &': {
    marginTop: '0.25rem'
  },

  '&:hover': {
    backgroundColor: '$NA4'
  },

  '&.active': {
    backgroundColor: '$NA8',
    boxShadow: 'inset 3px 0 0 $B500',
    color: '$textDefault',

    fontWeight: 600,

    '&:hover': {
      backgroundColor: '$NA12'
    }
  },

  [`> ${Icon}`]: {
    marginRight: '1.5rem',
    width: '1.25rem',

    fontSize: '1.25rem',
    lineHeight: '1.25rem'
  },

  variants: {
    status: {
      active: {
        backgroundColor: '$NA8',
        boxShadow: 'inset 3px 0 0 $B500',
        color: '$textDefault',

        fontWeight: 600,

        '&:hover': {
          backgroundColor: '$NA12'
        }
      }
    }
  }
})

type Props = StitchesProps<typeof Wrapper> & {
  icon: IconDefinition
  title: string
}

const Item = ({ icon, title, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Icon icon={icon} />
      <Text weight='inherit'>
        {title}
      </Text>
    </Wrapper>
  )
}

export default Item
