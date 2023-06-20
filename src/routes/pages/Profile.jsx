import { useParams } from 'react-router-dom';
import { Container } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { routeVariants } from '../../utils/routeVariants';
import ProfileDisplay from "../../features/Profile/Display/ProfileDisplay";

const Profile = () => {
    let { userID } = useParams();
    
    return (
        <Container as={motion.div} variants={routeVariants} initial={"initial"} animate={"final"} py={{ base: "5rem", md: "2rem"}}>
            <ProfileDisplay userID={userID} />
        </Container>
    );
};

export default Profile;