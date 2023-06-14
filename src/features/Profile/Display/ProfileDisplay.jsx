import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { Box, Flex, Text, Grid, GridItem, useDisclosure, Image, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import UpdateForm from "../Update/UpdateForm";
import UpdatePic from "../Update/UpdatePic";
import ModalWBtn from "../../../components/Modal/ModalWBtn";
import { getUserPosts } from "../../../services/reqPost";
import { getUser } from "../../../services/reqUser";
import FriendBtn from "../../Friends/Add/FriendBtn";
import ProfileDisplayPosts from "../../Posts/Display/ProfileDisplayPosts";

const ProfileDisplay = ({ userID }) => {
    const userCtx = useContext(AuthContext);
    const [userPosts, setUserPosts] = useState([]);
    const [userProfile, setUserProfile] = useState({});
    const [isOwner, setIsOwner] = useState(null);
    const [isAddFriend, setIsAddFriend] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            const posts = await getUserPosts(userID);
            setUserPosts(posts.data.posts);
            // Is not account owner's profile
            if (userID !== userCtx.user._id) {
                const userProfile = await getUser(userID);
                setUserProfile(userProfile.data.user);
                setIsOwner(false);
                //  Determine if it's friend or not
                const isFriend = userCtx?.user?.friends?.filter(f => f.toString() === userID);
                if (isFriend?.length > 0) {
                    setIsAddFriend(false);
                } else {
                    setIsAddFriend(true);
                };
                //It is account owner's profile
            } else {
                setUserProfile(userCtx.user);
                setIsOwner(true);
            }
        };
        getPosts();
    }, [userID, userCtx.user]);

    return (<>
        <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap="2rem">
            <Flex gap="2rem">
                {/* if it's the user's profile, allow picture edit // else just show profile image */}
                {isOwner ?
                    <UpdatePic />
                    :
                    <Image className="img" src={userProfile?.profilePic} alt={userProfile?.username} fallbackSrc="/profileFallback.png" rounded="100%" w="10rem" h="10rem" objectFit="cover" />
                }
                {/* for sm to md screens */}
                <Box display={{ md: "none" }}>
                    <Text mb="1rem" fontSize="4xl">{userProfile?.username}</Text>
                    {/* if it's user's profile allow profile edit // else show friend functionality */}
                    {isOwner ?
                        <ModalWBtn btnTxt="Edit Profile" modalTitle="Edit your profile" modalBody={<UpdateForm />} />
                        :
                        userProfile._id && isAddFriend !== null && <FriendBtn isAdd={isAddFriend} friendID={userProfile._id} />
                    }
                </Box>
            </Flex>
            <GridItem>
                {/* for md+ screens*/}
                <Flex justifyContent="space-between" alignItems="center" mb="2rem" display={{ base: "none", md: "flex" }}>
                    <Text fontSize="4xl">{userProfile?.username}</Text>
                    {isOwner ?
                        <ModalWBtn btnTxt="Edit Profile" modalTitle="Edit your profile" modalBody={<UpdateForm />} />
                        :
                        userProfile._id && isAddFriend !== null && <FriendBtn isAdd={isAddFriend} friendID={userProfile._id} />
                    }
                </Flex>
                <Text fontSize="lg" >{userProfile?.firstName} {userProfile?.lastName}</Text>
                <Text fontSize="lg" >{userProfile?.bio}</Text>
            </GridItem>
        </Grid>

        <ProfileDisplayPosts posts={userPosts} userInfo={userProfile} />
    </>
    );
};

export default ProfileDisplay;