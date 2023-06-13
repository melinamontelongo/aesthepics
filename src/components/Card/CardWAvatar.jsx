import { Card, CardBody, Text, Avatar, Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CardWAvatar = ({ avatarPic, linkToId, name, txt }) => {
    const value = useColorModeValue("white", "black");

    return (
        <Card bgColor={value} variant="outline">
            <CardBody>
                <Flex justifyContent="space-between" alignItems="center" gap="2rem">
                    <Avatar size="xl" name={name} src={avatarPic} />
                    <Box>
                        <Text as={Link} to={`/profile/${linkToId}`} fontSize="lg" fontWeight="bold">{name}</Text>
                        <Text>{txt}</Text>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default CardWAvatar;