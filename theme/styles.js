import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/oleo-script-swash-caps/400.css';
import '@fontsource/oleo-script-swash-caps/700.css';

export const config = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

export const styles = {
    global: (props) => ({
        "html, body": {
            color: mode('#0f0f0f', '#faf8f7')(props),
            bg: mode('#faf8f7', '#0f0f0f')(props),
        },
    }),
};

export const fonts = {
    aesthepics: `'Oleo Script Swash Caps', sans-serif`,
    body: `'Poppins', sans-serif`,
};