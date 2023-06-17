import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

const InfoText = ({ text }) => {
    const colorCtx = useContext(ColorContext);
    return (
        <Text mb="1rem" py="1rem" fontStyle={"italic"}>{text}</Text>
    );
};

export default InfoText;