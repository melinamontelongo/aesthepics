import { Card, CardHeader, CardBody, CardFooter, Flex, Heading, Avatar, Box, Text, Image, Button, useColorModeValue, Tooltip, useDisclosure, Collapse, Icon } from "@chakra-ui/react";
import { BiChat } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import CommentSection from "../Comment/CommentSection";
import { deletePost, likePost } from "../../../services/reqPost";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { dateFormatter } from "../../../utils/dateFormatter";
import { AiOutlineDelete } from "react-icons/ai";
import AlertDialogComp from "../../../components/Alert/AlertDialogComp";
import AlertContext from "../../../context/AlertContext";

const Post = ({ post }) => {
    const { _id, createdAt, description, likeCount, picture, profilePic, userOwner, username } = post;
    const { isOpen, onToggle } = useDisclosure();
    const { time, date } = dateFormatter(createdAt);

    const [likes, setLikes] = useState(likeCount);
    const [loggedUserLiked, setLoggedUserLiked] = useState(null);
    const [isByUser, setIsByUser] = useState(null);
    const [wasDeleted, setWasDeleted] = useState(false);

    //  Context
    const alertCtx = useContext(AlertContext);
    const userCtx = useContext(AuthContext);

    //  Alerts management
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    //  Colors
    const bg = useColorModeValue("white", "black");
    const color = useColorModeValue("black", "white");
    const tooltipBg = useColorModeValue("#edf2f7", "#141414");

    useEffect(() => {
        //  To show visually if post was liked by current user
        if (userCtx.user?.likedPosts) {
            const isLiked = userCtx.user.likedPosts.filter(post => post === _id);
            if (isLiked.length > 0) {
                setLoggedUserLiked(true);
            } else {
                setLoggedUserLiked(false);
            }
        }
        //  To show delete option if post was made by user
        if (userOwner.toString() === userCtx.user._id) setIsByUser(true);
    }, [userCtx.user]);

    const clickLike = async () => {
        const like = await likePost(_id, userCtx.user._id, userCtx.token);
        if (like.status === 200) {
            setLikes(like.data.likeCount);
            alertCtx.success(like.data.message);
            //  To update user liked posts
            userCtx.getUserState();
        } else {
            alertCtx.error(like.data.message);
        };
    }

    const deleteUserPost = async () => {
        const picID = picture.split("/").pop().split(".png")[0];
        const response = await deletePost(_id, picID, userCtx.token);
        if (response.status === 200) {
            alertCtx.success(response.data.message);
            setWasDeleted(true);
        } else {
            alertCtx.error(response.data.message);
        };
    };

    const confirmDelete = () => {
        setIsDialogVisible(true);
    };

    return (<>
        <AlertDialogComp isVisible={isDialogVisible} actionFn={deleteUserPost} header={"Delete post?"} body={"This cannot be undone."} action={"Delete"} />
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
                    alt={`${username}'s post photo`}
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