import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
    border: "1px solid",
    borderImageSlice: 1,
    borderRadius: 0,
    borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    _hover: {
        bg: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
        color: "#0f0f0f",
    },
    _active: {
        bg: "linear-gradient(to right, #ff789a, #bc75ff, #73ffab, #ffc37a)",
        borderImageSource: "linear-gradient(to right, #ff789a, #bc75ff, #73ffab, #ffc37a)",
    },
    _dark: {
        _hover: {
            color: "#0f0f0f",
        },
        _active: {

        },
    }
});

const solid = defineStyle({
    borderRadius: 0,
    bg: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
    color: "#0f0f0f",
    _hover: {
        bg: "linear-gradient(to right, #ffb04f, #4fff95, #aa4fff, #ff4f7b)",
    },
    _active: {
        bg: "linear-gradient(to right, #ffc37a, #73ffab, #bc75ff, #ff789a)",
    }
});

const ghost = defineStyle({
    border: "1px solid transparent",
    borderRadius: 0,
    _hover: {
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)",
        bg: "none",
    },
    _active: {
        bg: "none",
    }
});

export const buttonTheme = defineStyleConfig({
    variants: { outline, solid, ghost },
});
