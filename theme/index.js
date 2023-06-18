import { extendTheme } from '@chakra-ui/react';
import '@fontsource/oleo-script-swash-caps/400.css';
import '@fontsource/oleo-script-swash-caps/700.css';
import { buttonTheme } from './components/button';
import { config, styles, fonts } from './styles';
import { cardTheme } from './components/card';
import { modalTheme } from './components/modal';
import { avatarTheme } from './components/avatar';
import { tooltipTheme } from './components/tooltip';
import { menuTheme } from './components/menu';
import { alertTheme } from './components/alert';

const theme = extendTheme({
  config,
  styles,
  fonts,
  components: {
    Button: buttonTheme,
    Card: cardTheme,
    Modal: modalTheme,
    Avatar: avatarTheme,
    Tooltip: tooltipTheme,
    Menu: menuTheme,
    Alert: alertTheme,
  }
});

export default theme;
