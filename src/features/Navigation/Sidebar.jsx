import { useColorModeValue, Box, Text, SimpleGrid, Flex, Heading, Button, Icon, Divider } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom";

import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiSearch2Line, RiSearch2Fill, RiAddBoxFill, RiAddBoxLine } from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import AuthForm from "../Auth/AuthForm";
import UserMenu from "./UserMenu";
import ColorToggler from "../../components/ColorToggler/ColorToggler";
import ModalWBtn from "../../components/Modal/ModalWBtn";
import ColorContext from "../../context/ColorContext";

const Sidebar = () => {
    const colorCtx = useContext(ColorContext);
    const userCtx = useContext(AuthContext);

    return (
        <Box pos="fixed" left={0} top={0} bottom={0} w={{ md: "10%", lg: "20%" }} zIndex={1} hideBelow="md" bgColor={colorCtx.background} border={"0"} borderRight={"1px"} borderColor={colorCtx.accent}>
            <Box mx={{xl: "2rem", lg: "1.2rem"}} mt="2rem" hideBelow="lg">
                <Heading as={Link} to="/" size={{ xl: "xl", lg: "lg" }} fontFamily={"aesthepics"}>Aesthepics</Heading>
            </Box>
            <Box mx="2rem" mt="2rem" hideFrom="lg">
                <Heading as={Link} to="/" size="xl" fontFamily={"aesthepics"}>A</Heading>
            </Box>
            {/* User is signed in */}
            {userCtx?.token ?
                (<Flex justifyContent="start" pt="3rem" alignItems="space-between" h="80vh">
                    <SimpleGrid width="100%">
                        {/* HOME */}
                        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
                            {({ isActive }) => (
                                <Button variant='ghost' display="flex" justifyContent="start" gap="0.5rem" width="100%" mx="1rem" py="1.5rem">
                                    <Icon as={isActive ? AiFillHome : AiOutlineHome} fontSize="1.7em" />
                                    <Text fontSize="1.1em" hideBelow="lg">Home</Text>
                                </Button>
                            )}
                        </NavLink>
                        {/* SEARCH */}
                        <NavLink to="/search" style={{ display: "flex", alignItems: "center" }}>
                            {({ isActive }) => (
                                <Button variant='ghost' display="flex" justifyContent="start" gap="0.5rem" width="100%" mx="1rem" py="1.5rem">
                                    <Icon as={isActive ? RiSearch2Fill : RiSearch2Line} fontSize="1.7em" />
                                    <Text fontSize="1.1em" hideBelow="lg">Search</Text>
                                </Button>
                            )}
                        </NavLink>
                        {/* CREATE POST */}
                        <NavLink to="/create" style={{ display: "flex", alignItems: "center" }}>
                            {({ isActive }) => (
                                <Button variant='ghost' display="flex" justifyContent="start" gap="0.5rem" width="100%" mx="1rem" py="1.5rem">
                                    <Icon as={isActive ? RiAddBoxFill : RiAddBoxLine} fontSize="1.7em" />
                                    <Text fontSize="1.1em" hideBelow="lg">Create</Text>
                                </Button>
                            )}
                        </NavLink>
                        {/* FRIENDS */}
                        <NavLink to="/friends" style={{ display: "flex", alignItems: "center" }}>
                            {({ isActive }) => (
                                <Button variant='ghost' display="flex" justifyContent="start" gap="0.5rem" width="100%" mx="1rem" py="1.5rem">
                                    <Icon as={isActive ? HiUsers : HiOutlineUsers} fontSize="1.7em" />
                                    <Text fontSize="1.1em" hideBelow="lg">Friends</Text>
                                </Button>
                            )}
                        </NavLink>
                        {/* PROFILE */}
                        <Box display="flex" alignItems="center">
                            <UserMenu />
                        </Box>
                    </SimpleGrid>
                </Flex>)
                :
                (<>
                    {/* User is not signed in */}
                    <Flex justifyContent="center" pt="3rem" alignItems="center" h="80vh">
                        <SimpleGrid width="100%">
                            <ModalWBtn btnTxt="Sign In" modalTitle="Sign into your account" modalBody={<AuthForm authType="login" btnTxt="Sign In" />} />
                            <Divider my="2rem" orientation='horizontal' w="80%" mx="auto" />
                            <ModalWBtn btnTxt="Sign Up" modalTitle="Create an account" modalBody={<AuthForm authType="register" btnTxt="Sign Up" />} />
                        </SimpleGrid>
                    </Flex>
                    <Flex justifyContent="start">
                        <ColorToggler />
                    </Flex>
                </>
                )
            }
        </Box>
    );
};

export default Sidebar;