import { Container } from "@chakra-ui/react";
import SearchDisplay from "../features/Posts/Search/SearchDisplay";
const Search = () => {
    return (
        <Container py={{ base: "5rem", md: "2rem"}}>
            <SearchDisplay />
        </Container>
    );
};

export default Search;