import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
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
});

const flushed = defineStyle({
    minHeight: "1rem",
    px: "1rem",
    borderBottom: '1px solid',
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
});

export const textareaTheme = defineStyleConfig({
    variants: { outline, flushed },
});