import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(avatarAnatomy.keys)

const baseStyle = definePartsStyle({
    container: {
        bgGradient: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
        padding: "1px",
    },
})

export const avatarTheme = defineMultiStyleConfig({ baseStyle })