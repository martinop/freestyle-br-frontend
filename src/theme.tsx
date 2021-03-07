import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  body: `'Lato', monospace`
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '180em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  components: {
    Container: {
      sizes: {
        xl: {
          width: '1280px',
          maxWidth: '1280px',
        },
      },
    }
  },
})

export default theme