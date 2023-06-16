import { Container } from "@chakra-ui/react";
import DisplayFriends from "../features/Friends/Display/DisplayFriends";
import DisplayOtherUsers from "../features/Friends/Display/DisplayOtherUsers";

const Friends = () => {
    return(
        <Container py="5rem">
            <DisplayFriends />
            <DisplayOtherUsers />
        </Container >
    );
};

export default Friends;