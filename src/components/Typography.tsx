import { StitchesVariants } from '@stitches/react'
import { HTMLProps } from 'react'

import Text from '@/elements/Text'

type TextVariants = StitchesVariants<typeof Text>

type HeadingProps = Omit<HTMLProps<HTMLHeadingElement>, 'as' | 'ref'> & TextVariants
type ParagraphProps = Omit<HTMLProps<HTMLParagraphElement>, 'as' | 'ref'> & TextVariants
type SpanProps = Omit<HTMLProps<HTMLSpanElement>, 'as' | 'ref'> & TextVariants

export const Display = (props: HeadingProps) => {
  return (
    <Text
      as='h1'
      color='default'
      size='xxxl'
      weight='semibold'
      {...props}
    />
  )
}

export const Title = (props: HeadingProps) => {
  return (
    <Text
      as='h2'
      color='default'
      size='xxl'
      weight='semibold'
      {...props}
    />
  )
}

export const Heading = (props: HeadingProps) => {
  return (
    <Text
      as='h3'
      color='default'
      size='xl'
      weight='semibold'
      {...props}
    />
  )
}

export const Subheading = (props: HeadingProps) => {
  return (
    <Text
      as='h4'
      color='default'
      size='lg'
      weight='medium'
      {...props}
    />
  )
}

export const Body = (props: ParagraphProps) => {
  return (
    <Text
      as='h3'
      color='default'
      size='md'
      weight='normal'
      {...props}
    />
  )
}

export const Small = (props: SpanProps) => {
  return (
    <Text
      as='span'
      color='lighter'
      size='sm'
      weight='normal'
      {...props}
    />
  )
}

export const Caption = (props: SpanProps) => {
  return (
    <Text
      as='span'
      color='light'
      css={{ textTransform: 'uppercase' }}
      size='sm'
      weight='semibold'
      {...props}
    />
  )
}
