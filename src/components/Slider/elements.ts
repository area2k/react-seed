import styled from '@/styles'

export type ReactSliderState = {
  index: number,
  value: number | number[],
  valueNow: number
}

export const Wrapper = styled('div', {
  $$inactiveTrackColor: '$colors$neutralA16',
  $$inactiveMarkColor: '$colors$neutralLight',
  $$activeTrackColor: '$colors$themeDefault',
  $$activeMarkColor: '$colors$themeDark',
  $$thumbColor: '$colors$themeDefault',

  padding: '10px 0',
  width: '100%',

  '& .slider': {
    height: '4px',

    '&.disabled': {
      $$inactiveTrackColor: '$colors$neutralLightest',
      $$inactiveMarkColor: '$colors$neutralLighter',
      $$activeTrackColor: '$colors$neutralLight',
      $$activeMarkColor: '$colors$neutralLight',
      $$thumbColor: '$colors$neutralLight',

      cursor: 'not-allowed'
    }
  }
})

Wrapper.displayName = 'stitches(Slider.Wrapper)'

export const Mark = styled('div', {
  boxSize: '6px',
  margin: '0 5px',

  position: 'absolute',
  top: '-1px',

  borderRadius: '$round',
  cursor: 'pointer',

  '.slider.disabled &': {
    cursor: 'initial'
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$$activeMarkColor',
      },
      false: {
        backgroundColor: '$$inactiveMarkColor',
      }
    }
  }
})

Mark.displayName = 'stitches(Slider.Mark)'

export const Thumb = styled('div', {
  boxSize: '16px',

  position: 'absolute',
  top: '-6px',

  backgroundColor: '$$thumbColor',
  borderRadius: '$round',
  cursor: 'grab',
  outline: 'none',

  transition: 'transform 300ms ease',

  focusPseudoElement: {
    element: 'after',
    baseRadius: '$round',
    borderWidth: 1
  },

  '&:focus': {
    transform: 'scale(1.2)'
  },

  '.slider.disabled &': {
    cursor: 'not-allowed',

    transform: 'initial'
  }
})

Thumb.displayName = 'stitches(Slider.Thumb)'

export const Track = styled('div', {
  height: '4px',

  backgroundColor: '$$inactiveTrackColor',

  // Dashed track effect, problem is it moves everytime the thumb does bc of resizing
  // backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, $colors$neutralA24 2px, $colors$neutralA24 4px)',
})

Track.displayName = 'stitches(Slider.Track)'
