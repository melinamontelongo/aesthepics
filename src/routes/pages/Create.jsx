import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { routeVariants } from "../../utils/routeVariants";
import CreatePost from "../../features/Posts/Create/CreatePost";

const Create = () => {
    return (
        <Container as={motion.div} variants={routeVariants} initial={"initial"} animate={"final"} py={{ base: "5rem", md: "2rem"}}>
            <CreatePost />
        </Container>
    );
};

export default Create;