import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Ring } from '@uiball/loaders';

const Loader = () => {
    const loaderColor = useColorModeValue("black", "white");
    return (
        <Flex justifyContent="center">
            <Ring size={30} color={loaderColor} />
        </Flex>
    );
};

export default Loader;