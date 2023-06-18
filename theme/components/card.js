import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);

// define custom styles for xl size
const baseStyle = definePartsStyle({
    container: {
        bg: "#faf8f7",
        _dark: {
            bg: "#0f0f0f",
        },
    }
});

// export sizes in the component theme
export const cardTheme = defineMultiStyleConfig({ baseStyle });