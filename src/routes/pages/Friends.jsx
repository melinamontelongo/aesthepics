import { Container } from "@chakra-ui/react";
import { routeVariants } from "../../utils/routeVariants";
import { motion } from "framer-motion";
import DisplayFriends from "../../features/Friends/Display/DisplayFriends";
import DisplayOtherUsers from "../../features/Friends/Display/DisplayOtherUsers";

const Friends = () => {
    return(
        <Container as={motion.div} variants={routeVariants} initial={"initial"} animate={"final"}  py={{ base: "5rem", md: "2rem"}}>
            <DisplayFriends />
            <DisplayOtherUsers />
        </Container >
    );
};

export default Friends;