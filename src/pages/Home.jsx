import { Container } from "@chakra-ui/react";
import DisplayPosts from "../features/Posts/Display/DisplayPosts";

const Home = () => {
    return (
        <Container py="5rem">
            <DisplayPosts />
        </Container>
    )
}

export default Home;