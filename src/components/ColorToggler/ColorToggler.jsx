import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { Button, Icon, useColorMode } from "@chakra-ui/react";

const ColorToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode} mx={{ md: "0.2rem", lg: "1rem" }} py={{ md: "0.2rem", lg: "1.5rem" }} variant="ghost">
            {colorMode === 'light' ? <Icon as={BsFillMoonFill} /> : <Icon as={BsSunFill} />}
        </Button>
    );
};

export default ColorToggler;