import styled from '@/styles'

import Stack, { Props as StackProps } from '@/components/Stack'

const Wrapper = styled('div', {
  marginTop: '28px'
})

const FormFooter = ({ horizontalGap = 16, justify = 'end', ...props }: StackProps) => {
  return (
    <Wrapper>
      <Stack
        horizontalGap={horizontalGap}
        justify={justify}
        {...props}
      />
    </Wrapper>
  )
}

FormFooter.Wrapper = Wrapper
Wrapper.displayName = 'stitches(FormFooter.Wrapper)'

export default FormFooter
