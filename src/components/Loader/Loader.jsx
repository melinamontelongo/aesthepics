import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Ring } from '@uiball/loaders';
import { useContext } from 'react';
import ColorContext from '../../context/ColorContext';

const Loader = () => {
    const colorCtx = useContext(ColorContext);

    return (
        <Flex justifyContent="center" my="2rem">
            <Ring size={30} color={colorCtx.color} />
        </Flex>
    );
};

export default Loader;