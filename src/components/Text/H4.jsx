import { Heading } from "@chakra-ui/react";

const H4 = ({ text }) => {
    return (
        <Heading as="h4" mb="1rem" py="1rem" size={{ xl: "xl", lg: "md", base: "md" }}>{text}</Heading>
    );
};

export default H4;