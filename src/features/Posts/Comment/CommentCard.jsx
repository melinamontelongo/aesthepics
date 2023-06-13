import { Card, CardBody, Text, Avatar, Flex, Box, useColorModeValue, Icon, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useGetUserID } from '../../../hooks/useGetUser';
import { useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import AlertDialogComp from '../../../components/Alert/AlertDialogComp';

const CommentCard = ({ avatarPic, linkToId, name, txt, commentId, deleteComment }) => {
    const cardBgColor = useColorModeValue("white", "black");
    const tooltipBg = useColorModeValue("#edf2f7", "#141414");
    const color = useColorModeValue("black", "white");
    const userID = useGetUserID();
    const [isByUser, setIsByUser] = useState(null);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    useEffect(() => {
        setIsDialogVisible(false);
        //  Determine if comment was made by current logged in user
        if (linkToId === userID) setIsByUser(true);
    }, [isDialogVisible]);

    const confirmDelete = () => {
        setIsDialogVisible(true);
    };

    return (<>
    <AlertDialogComp isVisible={isDialogVisible} actionFn={() => deleteComment(commentId)}/>
        <Card bgColor={cardBgColor} variant="outline">
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
                        <Tooltip color={color} bgColor={tooltipBg} hasArrow label="Delete comment">
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