import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const outline = definePartsStyle({
  field: {
    px: "1rem",
    border: "1px solid",
    borderImageSlice: 1,
    borderRadius: 0,
    borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    transition: "all 1s ease-in-out",
    _focus: {
        boxShadow: "none",
        borderImageSource: "linear-gradient(to right, #ffb04f, #4fff95, #aa4fff, #ff4f7b)"
    },
    _placeholder: {
        fontStyle: "italic",
    }
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { outline },
});