import { Container } from "@chakra-ui/react";
import DisplayFriends from "../features/Friends/Display/DisplayFriends";

const Friends = () => {
    return(
        <Container py="5rem">
            <DisplayFriends />
        </Container >
    );
};

export default Friends;