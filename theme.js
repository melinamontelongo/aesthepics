import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/oleo-script-swash-caps/400.css';
import '@fontsource/oleo-script-swash-caps/700.css';
const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
}
const styles = {
  global: (props) => ({
    "html, body": {
      color: mode('black', 'white')(props),
      bg: mode('white', 'black')(props),
    },
  }),
}
const theme = extendTheme({
  config, styles,
  fonts: {
    aesthepics: `'Oleo Script Swash Caps', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})

export default theme