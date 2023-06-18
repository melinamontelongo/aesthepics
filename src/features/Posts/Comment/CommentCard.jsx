import { Card, CardBody, Text, Avatar, Flex, Box, useColorModeValue, Icon, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useGetUserID } from '../../../hooks/useGetUser';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import AlertDialogComp from '../../../components/Alert/AlertDialogComp';
import AuthContext from '../../../context/AuthContext';
import ColorContext from '../../../context/ColorContext';

const CommentCard = ({ avatarPic, linkToId, name, txt, commentId, deleteComment }) => {
    const userCtx = useContext(AuthContext);
    const colorCtx = useContext(ColorContext);

    const [isByUser, setIsByUser] = useState(null);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    useEffect(() => {
        //  Determine if comment was made by current logged in user
        if (linkToId === userCtx.user._id) setIsByUser(true);
    }, [userCtx.user]);

    const confirmDelete = () => {
        setIsDialogVisible(true);
    };

    return (<>
        <AlertDialogComp
            isVisible={isDialogVisible}
            setVisible={setIsDialogVisible}
            actionFn={() => deleteComment(commentId)}
            header={"Delete comment?"}
            body={"This cannot be undone."}
            action={"Delete"} />
        <Card bgColor={colorCtx.background} boxShadow="none" border={"0"} borderBottom={"1px"} borderRadius={"0"} sx={{ borderImageSlice: 1, borderImageSource: colorCtx.gradientToRight }}>
            <CardBody>
                <Flex justifyContent="space-between" gap="1rem">
                    <Flex alignItems="flex-start" gap="1rem">
                        <Avatar size="sm" name={name} src={avatarPic} />
                        <Box wordBreak="normal">
                            <Text as={Link} to={`/profile/${linkToId}`} fontWeight="bold" mr="0.5rem">{name}</Text>
                            {txt}
                        </Box>
                    </Flex>
                    {isByUser &&
                        <Tooltip color={colorCtx.color} bgColor={colorCtx.accent} label="Delete comment">
                            <span>
                                <Icon cursor="pointer" as={AiOutlineDelete} onClick={() => confirmDelete()} />
                            </span>
                        </Tooltip>
                    }
                </Flex>
            </CardBody>
        </Card>
    </>
    );
};

export default CommentCard;