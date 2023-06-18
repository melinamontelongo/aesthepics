import { Flex, Heading, Spacer } from "@chakra-ui/react"
import ColorToggler from "../../components/ColorToggler/ColorToggler";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

const Navbar = () => {
    const colorCtx = useContext(ColorContext);

    return (
        <Flex as="nav" p="1rem" pos="fixed" top={0} left={0} w="100%" zIndex={2} bgColor={colorCtx.background} hideFrom="md" border={"0"} borderBottom={"1px"} sx={{ borderImageSlice: 1, borderImageSource: colorCtx.gradientToRight }}>
            <Heading as={Link} to="/" size="xl" fontFamily={"aesthepics"}>Aesthepics</Heading>
            <Spacer />
            <ColorToggler />
        </Flex>
    )
}

export default Navbar;
