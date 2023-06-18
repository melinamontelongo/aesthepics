import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/oleo-script-swash-caps/400.css';
import '@fontsource/oleo-script-swash-caps/700.css';

export const config = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

export const styles = {
    global: (props) => ({
        "html, body": {
            color: mode('#141414', '#F2F2F2')(props),
            bg: mode('#F2F2F2', '#141414')(props),
        },
    }),
};

export const fonts = {
    aesthepics: `'Oleo Script Swash Caps', sans-serif`,
    body: `'Poppins', sans-serif`,
};