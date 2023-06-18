import { Text } from "@chakra-ui/react";

const InfoText = ({ text }) => {
    return (
        <Text mb="1rem" py="1rem" fontWeight="bold" fontStyle={"italic"}>{text}</Text>
    );
};

export default InfoText;