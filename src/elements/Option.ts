import styled from '@/styles'

const Option = styled('label', {
  $$bgColor: 'white',
  $$borderColor: '$colors$neutralLight',
  $$indicatorColor: 'white',
  $$textColor: '$colors$textLight',

  $$hoverBgColor: 'white',
  $$hoverBorderColor: '$colors$themeDefault',

  $$checkedBgColor: '$colors$themeDefault',
  $$checkedBorderColor: '$colors$themeDefault',
  $$checkedIndicatorColor: 'white',

  $$checkedHoverBgColor: '$colors$themeDefault',
  $$checkedHoverBorderColor: '$colors$themeDefault',

  $$disabledBgColor: '$colors$neutralLighter',
  $$disabledBorderColor: '$colors$neutralLighter',
  $$disabledIndicatorColor: '$colors$neutralLighter',
  $$disabledTextColor: '$colors$textLightest',

  $$disabledCheckedBgColor: '$colors$neutralLight',
  $$disabledCheckedBorderColor: '$colors$neutralLight',
  $$disabledCheckedIndicatorColor: 'white',

  $$focusRingColor: '$colors$themeA24',

  display: 'inline-flex',

  position: 'relative',

  color: '$$textColor',
  cursor: 'pointer',

  fontSize: '$md',

  '&::before': {
    content: '""',
    display: 'block',
    height: '18px',
    margin: '2px 12px 1px 2px',
    width: '18px',

    backgroundColor: '$$bgColor',
    border: '1px solid $$borderColor',
    borderRadius: '$round',

    transition: 'background-color 200ms ease, border-color 300ms ease, box-shadow 300ms ease'
  },

  '&::after': {
    content: '""',
    display: 'block',
    height: '6px',
    width: '6px',

    left: 8,
    position: 'absolute',
    top: 8,

    backgroundColor: '$$indicatorColor',
    borderRadius: '$round',

    transition: 'transform 300ms ease-in-out'
  },

  '&:hover': {
    '&::before': {
      borderColor: '$$hoverBorderColor',
      boxShadow: 'inset 0 0 0px 1px $$hoverBorderColor'
    }
  },

  'input:focus + &': {
    '&::before': {
      borderColor: '$$hoverBorderColor',
      boxShadow: 'inset 0 0 0px 1px $$hoverBorderColor, 0 0 0px 3px $$focusRingColor'
    }
  },

  'input[disabled] + &': {
    color: '$$disabledTextColor',
    cursor: 'not-allowed',

    '&::before': {
      backgroundColor: '$$disabledBgColor',
      borderColor: '$$disabledBorderColor'
    },

    '&::after': {
      backgroundColor: '$$disabledIndicatorColor'
    },

    '&:hover': {
      '&::before': {
        backgroundColor: '$$disabledBgColor',
        borderColor: '$$disabledBorderColor',
        boxShadow: 'none'
      }
    }
  },

  'input[disabled]:checked + &': {
    '&::before': {
      backgroundColor: '$$disabledCheckedBgColor',
      borderColor: '$$disabledCheckedBorderColor',
    },

    '&::after': {
      borderColor: '$$disabledCheckedIndicatorColor'
    },

    '&:hover': {
      '&::before': {
        backgroundColor: '$$disabledCheckedBgColor',
        borderColor: '$$disabledCheckedBorderColor'
      }
    }
  },

  'input:checked + &': {
    '&::before': {
      backgroundColor: '$$checkedBgColor',
      borderColor: '$$checkedBorderColor'
    },

    '&::after': {
      backgroundColor: '$$checkedIndicatorColor'
    },

    '&:hover': {
      '&::before': {
        backgroundColor: '$$checkedHoverBgColor',
        borderColor: '$$checkedHoverBorderColor'
      }
    }
  },

  variants: {
    appearance: {
      bullseye: {},
      checkbox: {
        $$disabledIndicatorColor: '$colors$neutralLighter',

        '&::before': {
          height: '19px',
          margin: '2px 12px 1px 2px',
          width: '19px',

          borderRadius: '$lg'
        },

        '&::after': {
          height: '10px',
          width: '5px',

          left: 9,
          top: 5,

          backgroundColor: 'transparent',
          borderColor: '$$indicatorColor',
          borderRadius: 0,
          borderStyle: 'solid',
          borderWidth: '0 2px 2px 0',

          transform: 'rotate(43deg)'
        },

        'input[disabled] + &::after': {
          backgroundColor: 'transparent',
          borderColor: '$$disabledIndicatorColor'
        },

        'input[disabled]:checked + &::after': {
          backgroundColor: 'transparent',
          borderColor: '$$disabledCheckedIndicatorColor'
        },

        'input:checked + &::after': {
          backgroundColor: 'transparent',
          borderColor: '$$checkedIndicatorColor'
        }
      },
      switch: {
        $$indicatorColor: '$colors$neutralLight',

        $$disabledIndicatorColor: '$colors$neutralLight',

        '&::before': {
          height: '21px',
          margin: '1px 12px 0 2px',
          width: '42px',

          borderRadius: '$round'
        },

        '&::after': {
          height: '12px',
          width: '12px',

          left: 6,
          top: 5,

          borderRadius: '$round',

          transition: 'transform 300ms ease-in-out'
        },

        'input:checked + &::after': {
          transform: 'translateX(22px)'
        }
      }
    },
    noMargin: {
      true: {
        '&::before': {
          margin: '0 !important'
        }
      },
      false: {}
    }
  },

  defaultVariants: {
    appearance: 'bullseye',
    noMargin: false
  }
})

export default Option
