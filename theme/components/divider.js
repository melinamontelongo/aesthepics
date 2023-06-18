import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid = defineStyle({
    border: "1px solid",
    borderImageSlice: 1,
    borderRadius: 0,
    borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
});

export const dividerTheme = defineStyleConfig({
    variants: { solid },
});