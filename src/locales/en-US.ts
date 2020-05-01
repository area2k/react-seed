import { Dictionary } from '@area2k/use-localization'
import enUS from 'date-fns/locale/en-US'

export const codes = ['en-US', 'en']
export const key = 'en-US'
export const date = enUS

export const dictionary: Dictionary = {
  testModal: ({ name }) => `Hello, ${name}!`
}
