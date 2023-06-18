import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
    list: {
        border: "1px solid",
        borderImageSlice: 1,
        borderRadius: 0,
        borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    },
    divider: {
        border: "1px solid",
        borderImageSlice: 1,
        borderRadius: 0,
        borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    }
});

export const menuTheme = defineMultiStyleConfig({ baseStyle })