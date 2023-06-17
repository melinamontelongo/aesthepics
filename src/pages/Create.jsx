import { Container, Text } from "@chakra-ui/react";
import CreatePost from "../features/Posts/Create/CreatePost";

const Create = () => {
    return (
        <Container py={{ base: "5rem", md: "2rem"}}>
            <CreatePost />
        </Container>
    );
};

export default Create;