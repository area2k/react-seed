import styled from '@/styles'

const Button = styled('button', {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '0.25rem 1.5rem',

  backgroundColor: '$primaryDefault',
  border: '1px solid transparent',
  borderColor: 'transparent',
  borderRadius: '$md',
  color: '$textLight',
  cursor: 'pointer',
  outline: 'none',
  overflow: 'hidden',

  fontFamily: '-apple-system, system-ui',
  fontSize: '0.875rem',
  fontWeight: 600,
  lineHeight: '28px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',

  transition: 'background-color 100ms ease-out 0s',

  '&:focus': {
    boxShadow: '$focus'
  },

  '&:hover': {
    backgroundColor: '$primaryHover'
  },

  '&:active': {
    backgroundColor: '$primaryActive'
  },

  '&[disabled]': {
    backgroundColor: '$primaryDisabled',
    color: '$textLightDisabled',
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: '$primaryDisabled'
    }
  },

  variants: {
    appearance: {
      glass: {
        backgroundColor: '$NA8',
        color: '$textSubtle',
        '&:hover': {
          backgroundColor: '$BA16',
          color: '$textPrimary'
        },
        '&:active': {
          backgroundColor: '$primaryTransparentActive'
        }
      },
      subtle: {
        backgroundColor: 'transparent',
        color: '$textHint',
        '&:hover': {
          backgroundColor: '$NA4',
          color: '$textDefault'
        },
        '&:active': {
          backgroundColor: '$NA8'
        }
      },
      outline: {
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
      }
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
          color: '$textLightDisabled',
          '&:hover': {
            backgroundColor: '$primaryDisabled'
          }
        }
      },
      basic: {
        backgroundColor: '$basicDefault',
        color: '$textDark',
        '&:hover': {
          backgroundColor: '$basicHover'
        },
        '&:active': {
          backgroundColor: '$basicActive'
        },
        '&[disabled]': {
          backgroundColor: '$basicDisabled',
          color: '$textDarkDisabled',
          '&:hover': {
            backgroundColor: '$basicDisabled'
          }
        }
      },
      warn: {
        backgroundColor: '$warningDefault',
        color: '$textDark',
        '&:hover': {
          backgroundColor: '$warningHover'
        },
        '&:active': {
          backgroundColor: '$warningActive'
        },
        '&[disabled]': {
          backgroundColor: '$warningDisabled',
          color: '$textDarkDisabled',
          '&:hover': {
            backgroundColor: '$warningDisabled'
          }
        }
      },
      danger: {
        backgroundColor: '$dangerDefault',
        color: '$textLight',
        '&:hover': {
          backgroundColor: '$dangerHover'
        },
        '&:active': {
          backgroundColor: '$dangerActive'
        },
        '&[disabled]': {
          backgroundColor: '$dangerDisabled',
          color: '$textLightDisabled',
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
          color: '$textLightDisabled',
          '&:hover': {
            backgroundColor: '$successDisabled'
          }
        }
      },
      info: {
        backgroundColor: '$infoDefault',
        color: 'white',
        '&:hover': {
          backgroundColor: '$infoHover'
        },
        '&:active': {
          backgroundColor: '$infoActive'
        },
        '&[disabled]': {
          backgroundColor: '$infoDisabled',
          color: '$textLightDisabled',
          '&:hover': {
            backgroundColor: '$infoDisabled'
          }
        }
      }
    }
  }
})

//
//  Outline
//

Button.compoundVariant({
  appearance: 'outline', color: 'primary'
}, {
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
})

Button.compoundVariant({
  appearance: 'outline', color: 'basic',
}, {
  backgroundColor: '$basicTransparentDefault',
  borderColor: '$basicTransparentDefaultBorder',
  color: '$textDark',
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
})

Button.compoundVariant({
  appearance: 'outline', color: 'success'
}, {
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
})

Button.compoundVariant({
  appearance: 'outline', color: 'danger'
}, {
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
})

Button.compoundVariant({
  appearance: 'outline', color: 'info'
}, {
  backgroundColor: '$infoTransparentDefault',
  borderColor: '$infoTransparentDefaultBorder',
  color: '$textInfo',
  '&:hover': {
    backgroundColor: '$infoTransparentHover',
    borderColor: '$infoTransparentHoverBorder'
  },
  '&:active': {
    backgroundColor: '$infoTransparentActive',
    borderColor: '$infoTransparentActiveBorder'
  },
  '&[disabled]': {
    backgroundColor: '$infoTransparentDisabled',
    borderColor: '$infoTransparentDisabledBorder',
    color: '$textInfoDisabled',
    '&:hover': {
      backgroundColor: '$infoTransparentDisabled',
      borderColor: '$infoTransparentDisabledBorder'
    }
  }
})

Button.displayName = 'Button'

export default Button
