import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors } from '../../../tokens/src/colors'
import { fontSizes } from '../../../tokens/src/font-sizes'
import { fontWeights } from '../../../tokens/src/font-weights'
import { fonts } from '../../../tokens/src/fonts'
import { lineHeights } from '../../../tokens/src/line-heights'
import { radii } from '../../../tokens/src/radii'
import { space } from '../../../tokens/src/space'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
