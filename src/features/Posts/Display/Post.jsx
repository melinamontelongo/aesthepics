import { Card, CardHeader, CardBody, CardFooter, Flex, Heading, Avatar, Box, Text, Image, Button, useColorModeValue, Tooltip, useDisclosure, Collapse, Icon } from "@chakra-ui/react";
import { BiChat } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import CommentSection from "../Comment/CommentSection";
import { deletePost, likePost } from "../../../services/reqPost";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/context";
import { useGetUser } from "../../../hooks/useGetUser";
import { dateFormatter } from "../../../utils/dateFormatter";
import { AiOutlineDelete } from "react-icons/ai";
import AlertDialogComp from "../../../components/Alert/AlertDialogComp";
import AlertComp from "../../../components/Alert/AlertComp";

const Post = ({ post }) => {
    const { _id, createdAt, description, likeCount, picture, profilePic, userOwner, username } = post;
    const { time, date } = dateFormatter(createdAt);
    const { isOpen, onToggle } = useDisclosure();
    const [likes, setLikes] = useState(likeCount);
    const [loggedUserLiked, setLoggedUserLiked] = useState(null);
    const [isByUser, setIsByUser] = useState(null);
    const [wasDeleted, setWasDeleted] = useState(false);
    
    //  Alert management
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const { user, getUserState } = useGetUser();
    const token = useContext(AuthContext).token;

    //  Colors
    const bg = useColorModeValue("white", "black");
    const color = useColorModeValue("black", "white");
    const tooltipBg = useColorModeValue("#edf2f7", "#141414");

    useEffect(() => {
        setIsDialogVisible(false);
        //  To show visually if post was liked by current user
        if (user?.likedPosts) {
            const isLiked = user.likedPosts.filter(post => post === _id);
            if (isLiked.length > 0) {
                setLoggedUserLiked(true);
            } else {
                setLoggedUserLiked(false);
            }
        }
        //  To show delete option if post was made by user
        if (userOwner.toString() === user._id) setIsByUser(true);
    }, [user, isDialogVisible]);

    const clickLike = async () => {
        const like = await likePost(_id, user._id, token);
        if (like.status === 200) {
            setLikes(like.data.likeCount);
            //  To update user liked posts
            getUserState();
        } else {
            alert(like.data)
        };
    }

    const deleteUserPost = async () => {
        const picID = picture.split("/").pop().split(".png")[0];
        const response = await deletePost(_id, picID, token);
        if (response.status === 200) {
            alert(response.data.message);
        } else {
            alert(response.data);
        };
        setWasDeleted(true);
    };

    const confirmDelete = () => {
        setIsDialogVisible(true);
    };

    return (<>
        <AlertDialogComp isVisible={isDialogVisible} actionFn={deleteUserPost} />
        {!wasDeleted &&
            <Card maxW='md' bgColor={bg} variant="outline">
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={username} src={profilePic} />
                            <Box>
                                <Heading as={Link} to={`/profile/${userOwner}`} size='md'>{username}</Heading>
                                <Tooltip hasArrow label={time} bgColor={tooltipBg} color={color} fontSize="sm">
                                    <Text fontSize="sm" cursor="pointer">{date}</Text>
                                </Tooltip>
                            </Box>
                        </Flex>
                        {isByUser &&
                            <Tooltip color={"white"} bgColor={"grey"} hasArrow label="Delete post">
                                <span>
                                    <Icon cursor="pointer" as={AiOutlineDelete} onClick={() => confirmDelete()} />
                                </span>
                            </Tooltip>
                        }
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                        {description}
                    </Text>
                </CardBody>
                <Image
                    objectFit='cover'
                    src={picture}
                    alt={`${user}'s post photo`}
                />

                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Button flex='1' variant='ghost' leftIcon={loggedUserLiked ? <AiFillLike /> : <AiOutlineLike />} onClick={clickLike}>
                        Like {likes > 0 && likes}
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiChat />} onClick={onToggle}>
                        Comments
                    </Button>
                </CardFooter>

                <Collapse in={isOpen} animateOpacity>
                    <CommentSection postId={_id} />
                </Collapse>

            </Card>
        }
    </>
    );
};

export default Post;