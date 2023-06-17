import { Card, CardBody, Text, Avatar, Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ColorContext from '../../context/ColorContext';

const CardWAvatar = ({ avatarPic, linkToId, name, txt }) => {
    const colorCtx = useContext(ColorContext);
    return (    
        <Card bgColor={colorCtx.background} boxShadow="none" border={"0"} borderBottom={"1px"} borderRadius={"0"} borderColor={colorCtx.accent} mb="1rem">
            <CardBody>
                <Flex justifyContent="start" alignItems="center" gap="3rem">
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