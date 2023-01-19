import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'
import components from './components'
import foundations from './foundations'
import layerStyles from './layerStyles'
import textStyles from './textStyles'

const overrides = {
  ...chakraTheme,
  ...foundations,
  components,
  textStyles,
  layerStyles,
  styles: {
    global: {
      'html, body': {
        color: 'neutral.800',
      },
      h2: {
        textStyle: 'h2',
      },
      h3: {
        textStyle: 'h3',
      },
      h4: {
        textStyle: 'h4',
      },
      p: {
        textStyle: 'body',

        '+ p': {
          marginTop: 8,
        },

        a: {
          textDecoration: 'underline',

          _hover: {
            color: 'red.600',
          },
        },

        strong: {
          fontFamily: 'narrowBlack',
          letterSpacing: 'wider',
        },
      },
      a: {
        cursor: 'pointer',
      },
    },
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
