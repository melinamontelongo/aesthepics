import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define the base component styles
const baseStyle = defineStyle({
    border: "1px solid",
    borderImageSlice: 1,
    borderRadius: 0,
    borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
});

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle })