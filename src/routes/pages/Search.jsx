import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { routeVariants } from "../../utils/routeVariants";
import SearchDisplay from "../../features/Posts/Search/SearchDisplay";

const Search = () => {
    return (
        <Container as={motion.div} variants={routeVariants} initial={"initial"} animate={"final"} py={{ base: "5rem", md: "2rem"}}>
            <SearchDisplay />
        </Container>
    );
};

export default Search;