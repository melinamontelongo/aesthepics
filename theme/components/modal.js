import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(modalAnatomy.keys);

// define custom styles for xl size
const baseStyle = definePartsStyle({
    dialog: {
        border: "1px solid",
        borderImageSlice: 1,
        borderRadius: 0,
        borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    }
});

// export sizes in the component theme
export const modalTheme = defineMultiStyleConfig({ baseStyle });