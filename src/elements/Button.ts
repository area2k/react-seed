import styled from '@/styles'

const Button = styled('button', {
  $$bgColor: '$colors$themeDefault',
  $$borderColor: '$colors$themeDefault',
  $$textColor: 'white',

  $$hoverBgColor: '$colors$themeDark',
  $$hoverBorderColor: '$colors$themeDark',

  $$activeBgColor: '$colors$themeDarker',
  $$activeBorderColor: '$colors$themeDarker',

  $$disabledBgColor: '$colors$neutralLightest',
  $$disabledBorderColor: '$colors$neutralLightest',
  $$disabledTextColor: '$colors$textLightest',

  $$focusRingColor: '$colors$themeA48',

  alignItems: 'center',
  display: 'inline-flex',
  gap: '12px',
  height: '36px',
  justifyContent: 'center',
  padding: '4px 24px',

  backgroundColor: '$$bgColor',
  borderColor: '$$borderColor',
  borderRadius: '$lg',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: '$$textColor',
  cursor: 'pointer',
  outline: 'none',
  overflow: 'hidden',

  fontFamily: '$inter',
  fontSize: '$md',
  fontWeight: '$medium',
  lineHeight: '28px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',

  transition: 'background-color 100ms ease-out 0s, box-shadow 300ms ease',

  '&:hover': {
    backgroundColor: '$$hoverBgColor',
    borderColor: '$$hoverBorderColor'
  },

  '&:active': {
    backgroundColor: '$$activeBgColor',
    borderColor: '$$activeBorderColor'
  },

  '&:focus-visible': {
    boxShadow: '0 0 0px 3px $$focusRingColor'
  },

  '&[disabled]': {
    backgroundColor: '$$disabledBgColor',
    borderColor: '$$disabledBorderColor',
    color: '$$disabledTextColor',
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: '$$disabledBgColor',
      borderColor: '$$disabledBorderColor'
    }
  },

  variants: {
    appearance: {
      primary: {},
      secondary: {
        $$bgColor: '$colors$themeA12',
        $$borderColor: 'transparent',
        $$textColor: '$colors$themeDarkest',

        $$hoverBgColor: '$colors$themeA16',
        $$hoverBorderColor: 'transparent',

        $$activeBgColor: '$colors$themeA24',
        $$activeBorderColor: 'transparent'
      },
      outline: {
        $$bgColor: 'transparent',
        $$borderColor: '$colors$neutralLighter',
        $$textColor: '$colors$textLight',

        $$hoverBgColor: 'transparent',
        $$hoverBorderColor: '$colors$neutralLight',

        $$activeBgColor: '$colors$neutralA4',
        $$activeBorderColor: '$colors$neutralLight',
      },
      clear: {
        $$bgColor: 'transparent',
        $$borderColor: 'transparent',
        $$textColor: '$colors$textLight',

        $$hoverBgColor: '$colors$neutralA4',
        $$hoverBorderColor: 'transparent',

        $$activeBgColor: '$colors$neutralA8',
        $$activeBorderColor: 'transparent',
      }
    },
    status: {
      theme: {},
      success: {
        $$bgColor: '$colors$successDefault',
        $$borderColor: '$colors$successDefault',
        $$textColor: 'white',

        $$hoverBgColor: '$colors$successDark',
        $$hoverBorderColor: '$colors$successDark',

        $$activeBgColor: '$colors$successDarker',
        $$activeBorderColor: '$colors$successDarker',

        $$focusRingColor: '$colors$successA48'
      },
      danger: {
        $$bgColor: '$colors$dangerDefault',
        $$borderColor: '$colors$dangerDefault',
        $$textColor: 'white',

        $$hoverBgColor: '$colors$dangerDark',
        $$hoverBorderColor: '$colors$dangerDark',

        $$activeBgColor: '$colors$dangerDarker',
        $$activeBorderColor: '$colors$dangerDarker',

        $$focusRingColor: '$colors$dangerA48'
      },
      neutral: {
        $$bgColor: '$colors$neutralDark',
        $$borderColor: '$colors$neutralDark',
        $$textColor: 'white',

        $$hoverBgColor: '$colors$neutralDarker',
        $$hoverBorderColor: '$colors$neutralDarker',

        $$activeBgColor: '$colors$neutralDarkest',
        $$activeBorderColor: '$colors$neutralDarkest'
      },
      'hi-contrast': {
        $$bgColor: 'white',
        $$borderColor: 'transparent',
        $$textColor: '$colors$textDefault',

        $$hoverBgColor: '$colors$whiteA92',
        $$hoverBorderColor: 'transparent',

        $$activeBgColor: '$colors$whiteA84',
        $$activeBorderColor: 'transparent'
      }
    }
  },

  compoundVariants: [{
    appearance: 'secondary',
    status: 'success',
    css: {
      $$bgColor: '$colors$successA12',
      $$borderColor: 'transparent',
      $$textColor: '$colors$successDarkest',

      $$hoverBgColor: '$colors$successA16',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$successA24',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'outline',
    status: 'success',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: '$colors$successLighter',
      $$textColor: '$colors$successDarker',

      $$hoverBgColor: 'transparent',
      $$hoverBorderColor: '$colors$successLight',

      $$activeBgColor: '$colors$successA4',
      $$activeBorderColor: '$colors$successLight',
    }
  }, {
    appearance: 'clear',
    status: 'success',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: 'transparent',
      $$textColor: '$colors$successDarker',

      $$hoverBgColor: '$colors$successA8',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$successA12',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'secondary',
    status: 'danger',
    css: {
      $$bgColor: '$colors$dangerA12',
      $$borderColor: 'transparent',
      $$textColor: '$colors$dangerDarkest',

      $$hoverBgColor: '$colors$dangerA16',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$dangerA24',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'outline',
    status: 'danger',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: '$colors$dangerLightest',
      $$textColor: '$colors$dangerDark',

      $$hoverBgColor: 'transparent',
      $$hoverBorderColor: '$colors$dangerLighter',

      $$activeBgColor: '$colors$dangerA4',
      $$activeBorderColor: '$colors$dangerLighter',
    }
  }, {
    appearance: 'clear',
    status: 'danger',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: 'transparent',
      $$textColor: '$colors$dangerDark',

      $$hoverBgColor: '$colors$dangerA8',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$dangerA12',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'secondary',
    status: 'neutral',
    css: {
      $$bgColor: '$colors$neutralA8',
      $$borderColor: 'transparent',
      $$textColor: '$colors$neutralDarkest',

      $$hoverBgColor: '$colors$neutralA12',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$neutralA16',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'outline',
    status: 'neutral',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: '$colors$neutralLighter',
      $$textColor: '$colors$textLight',

      $$hoverBgColor: 'transparent',
      $$hoverBorderColor: '$colors$neutralLight',

      $$activeBgColor: '$colors$neutralA4',
      $$activeBorderColor: '$colors$neutralLight',
    }
  }, {
    appearance: 'clear',
    status: 'neutral',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: 'transparent',
      $$textColor: '$colors$textLight',

      $$hoverBgColor: '$colors$neutralA4',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$neutralA8',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'secondary',
    status: 'hi-contrast',
    css: {
      $$bgColor: '$colors$whiteA16',
      $$borderColor: 'transparent',
      $$textColor: 'white',

      $$hoverBgColor: '$colors$whiteA24',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$whiteA32',
      $$activeBorderColor: 'transparent',
    }
  }, {
    appearance: 'outline',
    status: 'hi-contrast',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: '$colors$whiteA24',
      $$textColor: 'white',

      $$hoverBgColor: '$colors$whiteA4',
      $$hoverBorderColor: '$colors$whiteA48',

      $$activeBgColor: '$colors$whiteA16',
      $$activeBorderColor: '$colors$whiteA48',
    }
  }, {
    appearance: 'clear',
    status: 'hi-contrast',
    css: {
      $$bgColor: 'transparent',
      $$borderColor: 'transparent',
      $$textColor: 'white',

      $$hoverBgColor: '$colors$whiteA12',
      $$hoverBorderColor: 'transparent',

      $$activeBgColor: '$colors$whiteA24',
      $$activeBorderColor: 'transparent',
    }
  }],

  defaultVariants: {
    appearance: 'primary',
    status: 'theme'
  }
})

export default Button
