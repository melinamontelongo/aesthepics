import { useParams } from 'react-router-dom';
import { Container } from "@chakra-ui/react";

import ProfileDisplay from "../features/Profile/Display/ProfileDisplay";

const Profile = () => {
    let { userID } = useParams();
    
    return (
        <Container py={{ base: "5rem", md: "2rem"}}>
            <ProfileDisplay userID={userID} />
        </Container>
    );
};

export default Profile;