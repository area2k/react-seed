import { createCss } from '@stitches/react'

import colors from '@/styles/colors'
import fonts from '@/styles/typography'

// import light from '@/styles/themes/light'

const { styled, css, global } = createCss({
  theme: {
    colors: {
      ...colors,
      // ...light
    },
    fonts: {
      ...fonts
    },
    fontSizes: {
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      xxxl: '2rem'
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semi: '600',
      bold: '700'
    },
    radii: {
      none: '0px',
      sm: '2px',
      md: '3px',
      lg: '4px',
      xl: '6px',
      round: '9999px'
    },
    shadows: {
      0: 'none',
      1: `0 3px 6px ${colors.neutralA8}`,
      2: `0 4px 8px ${colors.neutralA12}`,
      3: `0 12px 24px ${colors.neutralA12}, 0 4px 8px ${colors.neutralA24}`,
      4: `0 16px 32px ${colors.neutralA32}, 0 4px 8px ${colors.neutralA48}`,
      focus: `0 0 0px 3px ${colors.themeA48}`,
    },
    zIndices: {
      sidebar: '1000',
      overlay: '10000',
      navbar: '1001',
      popover: '2000'
    }
  },
  conditions: {
    mediaPhoneOnly: '@media(max-width: 559px)',
    mediaTablet: '@media(min-width: 600px)',
    mediaSmallDesktop: '@media(min-width: 900px)',
    mediaDesktop: '@media(min-width: 1200px)',
    mediaLargeDesktop: '@media(min-width: 1800px)'
  }
})

global({
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  'html, body, #root': {
    display: 'initial',
    height: '100%',
    minHeight: '100%',
    width: '100vw',

    fontSize: '1rem',
    lineHeight: 1.5,

    WebkitTapHighlightColor: colors.themeA32
  },
  body: {
    margin: 0,
    WebkitOverflowScrolling: 'touch',

    backgroundColor: '$neutralGhost',
    color: '$textDefault',
    overflowY: 'auto',

    fontFamily: '$inter',
    fontWeight: 400,
    textRendering: 'optimizeLegibility',

    '&.noscroll': {
      overflow: 'hidden'
    }
  },
  'p, h1, h2, h3, h4, h5': {
    margin: 0,

    fontSize: '1rem',
    fontWeight: '$normal'
  },
  small: {
    fontSize: '$sm'
  },
  ul: {
    margin: 0,
    padding: 0
  }
})()

// export const lightTheme = css.theme({
//   colors: {
//     buttonColor: 'yellow'
//   }
// })

// export const darkTheme = css.theme({
//   colors: {
//     buttonColor: 'red'
//   }
// })

// export const mixinAlpha = (colorName: keyof StyledConfig['tokens']['colors'], alpha: number) => {
//   const hexColor = styledConfig.tokens.colors[colorName]
//   console.log('hexColor', hexColor)

//   const hexParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)

//   const rgbParts = hexParts
//     ? [parseInt(hexParts[1], 16), parseInt(hexParts[2], 16), parseInt(hexParts[3], 16)]
//     : [0, 0, 0]
//   rgbParts.push(alpha / 100)

//   return `rgba(${rgbParts[0]}, ${rgbParts[1]}, ${rgbParts[2]}, ${rgbParts[3]})`
// }

export { css }
export default styled
