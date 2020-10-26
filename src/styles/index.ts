import { createStyled } from '@stitches/react'

import colors from '@/styles/colors'
import { font } from '@/styles/typography'

import light from '@/styles/themes/light'

const styledConfig = {
  tokens: {
    colors: {
      ...colors,
      ...light
    }
  },
  breakpoints: {
    mediaPhoneOnly: (rule: string) => `@media(max-width: 559px) { ${rule} }`,
    mediaTablet: (rule: string) => `@media(min-width: 600px) { ${rule} }`,
    mediaSmallDesktop: (rule: string) => `@media(min-width: 900px) { ${rule} }`,
    mediaDesktop: (rule: string) => `@media(min-width: 1200px) { ${rule} }`,
    mediaLargeDesktop: (rule: string) => `@media(min-width: 1800px) { ${rule} }`
  }
}

type StyledConfig = typeof styledConfig

const { styled, css } = createStyled({
  tokens: {
    colors: { ...styledConfig.tokens.colors }
  },
  breakpoints: { ...styledConfig.breakpoints }
})

css.global({
  '*': {
    boxSizing: 'border-box'
  },
  'html, body, #root': {
    display: 'initial',
    height: '100%',
    minHeight: '100%',
    width: '100vw',

    fontSize: '1rem',
    lineHeight: 1.71429
  },
  body: {
    margin: 0,
    WebkitOverflowScrolling: 'touch',

    backgroundColor: 'white',
    color: 'black',
    overflowY: 'auto',

    fontFamily: font,
    fontWeight: 400,
    textRendering: 'optimizeLegibility'
  },
  'p, h1, h2, h3, h4, h5': {
    margin: 0,

    fontSize: '1rem',
    fontWeight: 400
  },
  ul: {
    margin: 0,
    padding: 0
  }
})()

// export const lightTheme = css.theme({
//   colors: {
//     $buttonColor: 'yellow'
//   }
// })

// export const darkTheme = css.theme({
//   colors: {
//     $buttonColor: 'red'
//   }
// })

export const mixinAlpha = (colorName: keyof StyledConfig['tokens']['colors'], alpha: number) => {
  const hexColor = styledConfig.tokens.colors[colorName]
  console.log('hexColor', hexColor)

  const hexParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)

  const rgbParts = hexParts
    ? [parseInt(hexParts[1], 16), parseInt(hexParts[2], 16), parseInt(hexParts[3], 16)]
    : [0, 0, 0]
  rgbParts.push(alpha / 100)

  return `rgba(${rgbParts[0]}, ${rgbParts[1]}, ${rgbParts[2]}, ${rgbParts[3]})`
}

export { css }
export default styled
