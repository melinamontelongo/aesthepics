import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(alertAnatomy.keys)

const baseStyle = definePartsStyle({
    container: {
        border: "1px solid",
        borderImageSlice: 1,
        borderRadius: 0,
        borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    }
})

const subtle = defineStyle({
    container: {
        backdropFilter: "blur(10px) brightness(20%)",
    }

})

export const alertTheme = defineMultiStyleConfig({ baseStyle, variants: { subtle }, });