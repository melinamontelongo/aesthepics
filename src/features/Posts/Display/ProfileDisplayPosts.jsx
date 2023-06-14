import { useContext, useState } from 'react';
import { Flex, useDisclosure, Image, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Post from './Post';
import AuthContext from '../../../context/AuthContext';
import AlertContext from '../../../context/AlertContext';

const ProfileDisplayPosts = ({ posts, userInfo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentPost, setCurrentPost] = useState({});
    const userCtx = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);

    const displayPost = (post) => {
        if(userCtx.token){
            post.username = userInfo.username;
            post.userOwner = userInfo._id;
            post.profilePic = userInfo.profilePic;
            setCurrentPost(post);
            onOpen();
        } else {
            alertCtx.error("Please sign in or register.");
        }
    };

    return (<>
        <Flex wrap="wrap" gap="0.2rem" justifyContent="center" alignItems="center" mt="2rem">
            {posts?.map((post, i) => {
                return <Image
                    key={`profilePost${post._id}${i}`}
                    src={post.picture} w="15rem" h="15rem"
                    objectFit="cover"
                    onClick={() => displayPost(post)} />
            })}
        </Flex >

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay zIndex={"40"}/>
            <ModalContent>
                <Post
                    post={currentPost}
                />
            </ModalContent>
        </Modal>
    </>
    );
};

export default ProfileDisplayPosts;