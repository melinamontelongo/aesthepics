import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { routeVariants } from "../../utils/routeVariants";
import DisplayPosts from "../../features/Posts/Display/DisplayPosts";

const Home = () => {
    return (
        <Container as={motion.div} variants={routeVariants} initial={"initial"} animate={"final"} py={{ base: "5rem", md: "2rem"}}>
            <DisplayPosts />
        </Container>
    )
}

export default Home;