import { Container, Text } from "@chakra-ui/react";
import CreatePost from "../features/Posts/Create/CreatePost";

const Create = () => {
    return (
        <Container py={{ base: "5rem", md: "2rem"}}>
            <Text fontSize="2xl" textAlign="center" mb="2rem">Create New Post</Text>
            <CreatePost />
        </Container>
    );
};

export default Create;