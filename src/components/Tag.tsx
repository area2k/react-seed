import { faTimes } from '@fortawesome/free-solid-svg-icons'

import styled from '@/styles'

import Icon from '@/elements/Icon'

const Wrapper = styled('span', {
  $$bgColor: '$colors$neutralA12',
  $$textColor: '$colors$textDefault',

  alignItems: 'center',
  display: 'inline-flex',
  minHeight: '1.75rem',
  maxWidth: '100%',

  backgroundColor: '$$bgColor',
  borderRadius: '$lg',
  color: '$$textColor'
})

const TextWrapper = styled('span', {
  display: 'inline-block',
  padding: '0 0.5rem',

  overflow: 'hidden',

  fontSize: '$md',
  lineHeight: '22px',
  textOverflow: 'ellipsis',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap'
})

const CloseButton = styled('button', {
  $$iconColor: '$colors$textLight',

  alignItems: 'center',
  appearance: 'none',
  boxSize: '1.75rem',
  display: 'inline-flex',
  justifyContent: 'center',

  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '0 $lg $lg 0',
  color: '$$iconColor',
  cursor: 'pointer',
  outline: 'none',

  fontSize: '$lg',

  '&:hover': {
    backgroundColor: '$neutralA8'
  }
})

type Props = {
  text: string
  onDismiss?: () => void
}

const Tag = ({ text, onDismiss }: Props) => {
  return (
    <Wrapper>
      <TextWrapper>
        {text}
      </TextWrapper>
      {onDismiss &&
        <CloseButton onClick={onDismiss}>
          <Icon fixedWidth icon={faTimes} />
        </CloseButton>
      }
    </Wrapper>
  )
}

Wrapper.displayName = 'stitches(Tag.Wrapper)'
TextWrapper.displayName = 'stitches(Tag.TextWrapper)'
CloseButton.displayName = 'stitches(Tag.CloseButton)'

Tag.Wrapper = Wrapper

export default Tag
