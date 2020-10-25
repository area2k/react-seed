import styled from '@/styles'

const Button = styled('button', {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '0.625rem 1.25rem',

  backgroundColor: '$P400',
  border: '1px solid transparent',
  borderColor: 'transparent',
  borderRadius: '0.375rem',
  color: '$textControl',
  cursor: 'pointer',
  outline: 'none',
  overflow: 'hidden',

  fontFamily: '-apple-system, system-ui',
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: 1.25,
  textDecoration: 'none',

  '&[disabled]': {
    cursor: 'not-allowed'
  },

  variants: {
    appearance: {
      ghost: {},
      outline: {}
    },
    color: {
      primary: {
        backgroundColor: '$primaryDefault',
        '&:hover': {
          backgroundColor: '$primaryHover'
        },
        '&:active': {
          backgroundColor: '$primaryActive'
        },
        '&[disabled]': {
          backgroundColor: '$primaryDisabled',
          color: '$textControlDisabled',
          '&:hover': {
            backgroundColor: '$primaryDisabled'
          }
        }
      },
      basic: {
        backgroundColor: '$basicDefault',
        color: '$textBasic',
        '&:hover': {
          backgroundColor: '$basicHover'
        },
        '&:active': {
          backgroundColor: '$basicActive'
        },
        '&[disabled]': {
          backgroundColor: '$basicDisabled',
          color: '$textDisabled',
          '&:hover': {
            backgroundColor: '$basicDisabled'
          }
        }
      },
      warn: {
        backgroundColor: '$warningDefault',
        color: '$textBasic',
        '&:hover': {
          backgroundColor: '$warningHover'
        },
        '&:active': {
          backgroundColor: '$warningActive'
        },
        '&[disabled]': {
          backgroundColor: '$warningDisabled',
          color: '$textDisabled',
          '&:hover': {
            backgroundColor: '$warningDisabled'
          }
        }
      },
      danger: {
        backgroundColor: '$dangerDefault',
        color: '$textControl',
        '&:hover': {
          backgroundColor: '$dangerHover'
        },
        '&:active': {
          backgroundColor: '$dangerActive'
        },
        '&[disabled]': {
          backgroundColor: '$dangerDisabled',
          color: '$textControlDisabled',
          '&:hover': {
            backgroundColor: '$dangerDisabled'
          }
        }
      },
      success: {
        backgroundColor: '$successDefault',
        color: 'white',
        '&:hover': {
          backgroundColor: '$successHover'
        },
        '&:active': {
          backgroundColor: '$successActive'
        },
        '&[disabled]': {
          backgroundColor: '$successDisabled',
          color: '$textControlDisabled',
          '&:hover': {
            backgroundColor: '$successDisabled'
          }
        }
      }
    }
  }
})

const OutlineButton = styled(Button, {
  backgroundColor: '$primaryTransparentDefault',
  borderColor: '$primaryTransparentDefaultBorder',
  color: '$textPrimary',
  '&:hover': {
    backgroundColor: '$primaryTransparentHover',
    borderColor: '$primaryTransparentHoverBorder'
  },
  '&:active': {
    backgroundColor: '$primaryTransparentActive',
    borderColor: '$primaryTransparentActiveBorder'
  },
  '&[disabled]': {
    backgroundColor: '$primaryTransparentDisabled',
    borderColor: '$primaryTransparentDisabledBorder',
    color: '$textPrimaryDisabled',
    '&:hover': {
      backgroundColor: '$primaryTransparentDisabled',
      borderColor: '$primaryTransparentDisabledBorder'
    }
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$primaryTransparentDefault',
        borderColor: '$primaryTransparentDefaultBorder',
        color: '$textPrimary',
        '&:hover': {
          backgroundColor: '$primaryTransparentHover',
          borderColor: '$primaryTransparentHoverBorder'
        },
        '&:active': {
          backgroundColor: '$primaryTransparentActive',
          borderColor: '$primaryTransparentActiveBorder'
        },
        '&[disabled]': {
          backgroundColor: '$primaryTransparentDisabled',
          borderColor: '$primaryTransparentDisabledBorder',
          color: '$textPrimaryDisabled',
          '&:hover': {
            backgroundColor: '$primaryTransparentDisabled',
            borderColor: '$primaryTransparentDisabledBorder'
          }
        }
      },
      basic: {
        backgroundColor: '$basicTransparentDefault',
        borderColor: '$basicTransparentDefaultBorder',
        color: '$textBasic',
        '&:hover': {
          backgroundColor: '$basicTransparentHover',
          borderColor: '$basicTransparentHoverBorder'
        },
        '&:active': {
          backgroundColor: '$basicTransparentActive',
          borderColor: '$basicTransparentActiveBorder'
        },
        '&[disabled]': {
          backgroundColor: '$basicTransparentDisabled',
          borderColor: '$basicTransparentDisabledBorder',
          color: '$textDisabled',
          '&:hover': {
            backgroundColor: '$basicTransparentDisabled',
            borderColor: '$basicTransparentDisabledBorder'
          }
        }
      },
      warn: {
        backgroundColor: '$warningTransparentDefault',
        borderColor: '$warningTransparentDefaultBorder',
        color: '$textWarning',
        '&:hover': {
          backgroundColor: '$warningTransparentHover',
          borderColor: '$warningTransparentHoverBorder'
        },
        '&:active': {
          backgroundColor: '$warningTransparentActive',
          borderColor: '$warningTransparentActiveBorder'
        },
        '&[disabled]': {
          backgroundColor: '$warningTransparentDisabled',
          borderColor: '$warningTransparentDisabledBorder',
          color: '$textWarningDisabled',
          '&:hover': {
            backgroundColor: '$warningTransparentDisabled',
            borderColor: '$warningTransparentDisabledBorder'
          }
        }
      },
      danger: {
        backgroundColor: '$dangerTransparentDefault',
        borderColor: '$dangerTransparentDefaultBorder',
        color: '$textDanger',
        '&:hover': {
          backgroundColor: '$dangerTransparentHover',
          borderColor: '$dangerTransparentHoverBorder'
        },
        '&:active': {
          backgroundColor: '$dangerTransparentActive',
          borderColor: '$dangerTransparentActiveBorder'
        },
        '&[disabled]': {
          backgroundColor: '$dangerTransparentDisabled',
          borderColor: '$dangerTransparentDisabledBorder',
          color: '$textDangerDisabled',
          '&:hover': {
            backgroundColor: '$dangerTransparentDisabled',
            borderColor: '$dangerTransparentDisabledBorder'
          }
        }
      },
      success: {
        backgroundColor: '$successTransparentDefault',
        borderColor: '$successTransparentDefaultBorder',
        color: '$textSuccess',
        '&:hover': {
          backgroundColor: '$successTransparentHover',
          borderColor: '$successTransparentHoverBorder'
        },
        '&:active': {
          backgroundColor: '$successTransparentActive',
          borderColor: '$successTransparentActiveBorder'
        },
        '&[disabled]': {
          backgroundColor: '$successTransparentDisabled',
          borderColor: '$successTransparentDisabledBorder',
          color: '$textSuccessDisabled',
          '&:hover': {
            backgroundColor: '$successTransparentDisabled',
            borderColor: '$successTransparentDisabledBorder'
          }
        }
      }
    }
  }
})

export { OutlineButton }

export default Button
