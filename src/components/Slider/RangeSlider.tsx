import ReactSlider from 'react-slider'
import { useCallback } from 'react'

import styled from '@/styles'

import { Mark, ReactSliderState, Thumb, Track as BaseTrack, Wrapper } from './elements'

const Track = styled(BaseTrack, {
  '&.track-0': {
    borderRadius: '$round 0 0 $round'
  },

  '&.track-1': {
    borderRadius: 0,
    backgroundColor: '$$activeTrackColor',
  },

  '&.track-2': {
    borderRadius: '0 $round $round 0'
  }
})

type SliderState = { index: number, value: number[], valueNow: number }

export type Props = {
  ariaLabel: string
  ariaValueText: string | ((state: SliderState) => string)
  disabled?: boolean
  id: string
  marks?: boolean | number[] | number
  max: number
  min: number
  minDistance?: number
  step: number
  value: number[]
  onChange: (value: number[]) => void
}

const RangeSlider = ({ ariaValueText, marks = false, onChange, ...props }: Props) => {
  const getValueText = useCallback(({ value, ...state }: ReactSliderState) => {
    if (typeof ariaValueText === 'string') {
      return ariaValueText
    } else if (typeof value !== 'number') {
      return ariaValueText({ ...state, value })
    } else {
      return 'Unknown value'
    }
  }, [ariaValueText])

  const handleChange = useCallback((value: number | number[] | null | undefined) => {
    if (!!value && typeof value === 'object') {
      return onChange(value)
    }
  }, [onChange])

  const isMarkActive = useCallback((markValue: number) => (
    markValue > props.value[0] && markValue < props.value[props.value.length - 1]
  ), [props.value])

  return (
    <Wrapper>
      <ReactSlider
        minDistance={1}
        {...props}
        pearling
        ariaValuetext={getValueText}
        marks={marks}
        renderMark={({ as, css, ...p }) => <Mark {...p} active={isMarkActive(Number(p.key))} />}
        renderThumb={({ as, css, ...p }) => <Thumb {...p} />}
        renderTrack={({ as, css, ...p }) => <Track {...p} />}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default RangeSlider
