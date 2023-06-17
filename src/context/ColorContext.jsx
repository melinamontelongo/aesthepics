import { useColorModeValue } from '@chakra-ui/react';
import { createContext } from 'react';

const ColorContext = createContext(null);

const ColorProvider = (props) => {
    const background = useColorModeValue("white", "black");
    const color = useColorModeValue("black", "white");
    const accent = useColorModeValue("#efefef", "#141414");
    return (
        <ColorContext.Provider value={{ background, color, accent }}>
            {props.children}
        </ColorContext.Provider>
    );
};

export { ColorProvider };
export default ColorContext;