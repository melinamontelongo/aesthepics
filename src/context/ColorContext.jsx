import { useColorModeValue } from '@chakra-ui/react';
import { createContext } from 'react';

const ColorContext = createContext(null);

const ColorProvider = (props) => {
    const background = useColorModeValue("#faf8f7", "#0f0f0f");
    const color = useColorModeValue("#0f0f0f", "#faf8f7");
    const secondary = useColorModeValue("#404040", "#8c8b8b");
    const accent = useColorModeValue("#e6e4e3", "#1c1c1c");
    const gradientToBottom = "linear-gradient(to bottom, #ff4f7b, #aa4fff, #4fff95, #ffb04f)";
    const gradientToRight = "linear-gradient(to right, #ff4f7b, #aa4fff, #4fff95, #ffb04f)";
    return (
        <ColorContext.Provider value={{ background, color, secondary, accent, gradientToBottom, gradientToRight }}>
            {props.children}
        </ColorContext.Provider>
    );
};

export { ColorProvider };
export default ColorContext;