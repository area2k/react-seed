import { useEffect, Dispatch, SetStateAction } from 'react'

import useQueryParams from '@/hooks/useQueryParams'

import debug from '@/util/debug'
import { LanguageCode } from '@/util/enums'

const validLanguages = [
  LanguageCode.ENGLISH,
  LanguageCode.SPANISH
]

interface Props {
  setLanguage: Dispatch<SetStateAction<string>>
}

const LanguageDetector = ({ setLanguage }: Props) => {
  const { lang } = useQueryParams()

  useEffect(() => {
    if (typeof lang === 'string' && validLanguages.includes(lang)) {
      debug.log(`[LanguageDetector] detected "${lang}"`)
      setLanguage(lang)
    }
  }, [lang])

  return null
}


export default LanguageDetector
