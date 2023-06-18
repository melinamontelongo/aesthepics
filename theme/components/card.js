import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);

// define custom styles for xl size
const baseStyle = definePartsStyle({
    container: {
        bg: "#F2F2F2",
        _dark: {
            bg: "#141414",
        },
    }
});

// export sizes in the component theme
export const cardTheme = defineMultiStyleConfig({ baseStyle });