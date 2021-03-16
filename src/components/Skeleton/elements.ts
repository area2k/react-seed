import styled, { keyframes } from '@/styles'

export const ShimmerAnimation = keyframes({
  '0%': { opacity: 0.45 },
  '100%': { opacity: 0.9 }
})

export const Shimmer = styled('div', {
  $$bgColor: '$colors$neutralLighter',

  width: '100%',

  animation: `${ShimmerAnimation} 800ms linear infinite alternate`,
  backgroundColor: '$$bgColor',
  borderRadius: '$lg',
})
