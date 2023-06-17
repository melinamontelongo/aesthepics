import { Container } from "@chakra-ui/react";
import DisplayPosts from "../features/Posts/Display/DisplayPosts";

const Home = () => {
    return (
        <Container py={{ base: "5rem", md: "2rem"}}>
            <DisplayPosts />
        </Container>
    )
}

export default Home;