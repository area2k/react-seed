import { StitchesProps } from '@stitches/react'
import { FC, Ref } from 'react'
import { IMaskMixin } from 'react-imask'

import type IMask from 'imask'
import type { InputMask } from 'imask'

import Input from '@/elements/Input'

type Props = StitchesProps<typeof Input> & {
  children?: never
  mask: string
  unmask?: boolean
  onAccept?: (value: string, inputMask: InputMask<IMask.AnyMaskedOptions>) => void
  onComplete?: (value: string, inputMask: InputMask<IMask.AnyMaskedOptions>) => void
}

const MaskedInput: FC<Props> = IMaskMixin(({ inputRef, ...props }: Props & { inputRef: Ref<HTMLInputElement> }) => (
  <Input
    ref={inputRef}
    {...props}
  />
))

export default MaskedInput
