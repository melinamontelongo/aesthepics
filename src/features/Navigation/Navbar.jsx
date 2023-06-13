import { Flex, Heading, Spacer, useColorMode, useColorModeValue, Button, Text, HStack } from "@chakra-ui/react"
import ColorToggler from "../../components/ColorToggler/ColorToggler";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const value = useColorModeValue("white", "black");
    return (
        <Flex as="nav" p="1rem" pos="fixed" top={0} left={0} w="100%" zIndex={2} bgColor={value}  hideFrom="md" borderBottomWidth="thin">
            <Heading>Aesthepics</Heading>
            <Spacer />
            <ColorToggler />
        </Flex>
    )
}

export default Navbar;
