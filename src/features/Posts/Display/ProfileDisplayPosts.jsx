import { useState } from 'react';
import { Flex, useDisclosure, Image, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Post from './Post';

const ProfileDisplayPosts = ({ posts, userInfo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentPost, setCurrentPost] = useState({});

    const displayPost = (post) => {
        post.username = userInfo.username;
        post.userOwner = userInfo._id;
        post.profilePic = userInfo.profilePic;
        setCurrentPost(post);
        onOpen();
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
            <ModalOverlay />
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