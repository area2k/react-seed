export const reds = {
  $R500: '#971353',
  $R400: '#B41C57',
  $R300: '#D22759',
  $R200: '#E35873',
  $R100: '#F17B86',
  $R75: '#FAA8A8',
  $R50: '#FCD7D3'
}

const redAlphaRoot = '180, 28, 87'

export const redAlphas = {
  $RA48: `rgba(${redAlphaRoot}, 0.48)`,
  $RA40: `rgba(${redAlphaRoot}, 0.40)`,
  $RA32: `rgba(${redAlphaRoot}, 0.32)`,
  $RA24: `rgba(${redAlphaRoot}, 0.24)`,
  $RA16: `rgba(${redAlphaRoot}, 0.16)`,
  $RA8: `rgba(${redAlphaRoot}, 0.08)`,
  $RA4: `rgba(${redAlphaRoot}, 0.04)`,
}

export const greens = {
  $G500: '#107F70',
  $G400: '#17987A',
  $G300: '#20B181',
  $G200: '#50D099',
  $G100: '#75E7AB',
  $G75: '#A6F7C4',
  $G50: '#D1FBDD'
}

const greenAlphaRoot = '23, 152, 122'

export const greenAlphas = {
  $GA48: `rgba(${greenAlphaRoot}, 0.48)`,
  $GA40: `rgba(${greenAlphaRoot}, 0.40)`,
  $GA32: `rgba(${greenAlphaRoot}, 0.32)`,
  $GA24: `rgba(${greenAlphaRoot}, 0.24)`,
  $GA16: `rgba(${greenAlphaRoot}, 0.16)`,
  $GA8: `rgba(${greenAlphaRoot}, 0.08)`,
  $GA4: `rgba(${greenAlphaRoot}, 0.04)`
}

export const purples = {
  $P500: '#403294',
  $P400: '#5243AA',
  $P300: '#6554C0',
  $P200: '#8777D9',
  $P100: '#998DD9',
  $P75: '#C0B6F2',
  $P50: '#EAE6FF'
}

const purpleAlphaRoot = '64, 50, 148'

export const purpleAlphas = {
  $PA48: `rgba(${purpleAlphaRoot}, 0.48)`,
  $PA40: `rgba(${purpleAlphaRoot}, 0.40)`,
  $PA32: `rgba(${purpleAlphaRoot}, 0.32)`,
  $PA24: `rgba(${purpleAlphaRoot}, 0.24)`,
  $PA16: `rgba(${purpleAlphaRoot}, 0.16)`,
  $PA8: `rgba(${purpleAlphaRoot}, 0.08)`,
  $PA4: `rgba(${purpleAlphaRoot}, 0.04)`
}

export const yellowsAtl = {
  $Y500: '#FF8B00',
  $Y400: '#FF991F',
  $Y300: '#FFAB00',
  $Y200: '#FFC400',
  $Y100: '#FFE380',
  $Y75: '#FFF0B3',
  $Y50: '#FFFAE6'
}

export const yellows = {
  $Y500: '#B78F1F',
  $Y400: '#DBB12E',
  $Y300: '#FFD53F',
  $Y200: '#FFE26F',
  $Y100: '#FFEB8B',
  $Y75: '#FFF3B2',
  $Y50: '#FFFAD8'
}

const yellowAlphaRoot = '255, 213, 63'

export const yellowAlphas = {
  $YA48: `rgba(${yellowAlphaRoot}, 0.48)`,
  $YA40: `rgba(${yellowAlphaRoot}, 0.40)`,
  $YA32: `rgba(${yellowAlphaRoot}, 0.32)`,
  $YA24: `rgba(${yellowAlphaRoot}, 0.24)`,
  $YA16: `rgba(${yellowAlphaRoot}, 0.16)`,
  $YA8: `rgba(${yellowAlphaRoot}, 0.08)`,
  $YA4: `rgba(${yellowAlphaRoot}, 0.04)`,
}

export const neutrals = {
  $N900: '#091E42',
  $N800: '#172B4D',
  $N700: '#253858',
  $N600: '#344563',
  $N500: '#42526E',
  $N400: '#505F79',
  $N300: '#5E6C84',
  $N200: '#6B778C',
  $N100: '#7A869A',
  $N90: '#8993A4',
  $N80: '#97A0AF',
  $N70: '#A5ADBA',
  $N60: '#B3BAC5',
  $N50: '#C1C7D0',
  $N40: '#DFE1E6',
  $N30: '#EBECF0',
  $N20: '#F4F5F7',
  $N10: '#FAFBFC',
  $N0: '#FFFFFF'
}

export const neutralAlphas = {
  $NA48: 'rgba(9, 30, 66, 0.48)',
  $NA40: 'rgba(9, 30, 66, 0.40)',
  $NA32: 'rgba(9, 30, 66, 0.32)',
  $NA24: 'rgba(9, 30, 66, 0.24)',
  $NA16: 'rgba(9, 30, 66, 0.16)',
  $NA8: 'rgba(9, 30, 66, 0.08)',
  $NA4: 'rgba(9, 30, 66, 0.04)'
}

export default {
  ...neutrals,
  ...neutralAlphas,
  ...reds,
  ...redAlphas,
  ...greens,
  ...greenAlphas,
  ...purples,
  ...purpleAlphas,
  ...yellows,
  ...yellowAlphas,
  $COLORNAME: 'fuchsia'
}
