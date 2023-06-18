import { useContext } from "react";
import { useColorModeValue, Flex, Divider, Box, Icon, Button } from "@chakra-ui/react";

import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiSearch2Line, RiSearch2Fill, RiAddBoxFill, RiAddBoxLine } from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";

import AuthContext from "../../context/AuthContext";

import AuthForm from "../Auth/AuthForm";
import UserMenu from "./UserMenu";
import ModalWBtn from "../../components/Modal/ModalWBtn";
import { NavLink } from "react-router-dom";
import ColorContext from "../../context/ColorContext";

const Footer = () => {
    const userCtx = useContext(AuthContext);
    const colorCtx = useContext(ColorContext);

    return (
        <Flex as="footer" p="1rem" pos="fixed" bottom={0} left={0} w="100%" zIndex={2} hideFrom="md" gap="1.5rem" align="center" justify={`${userCtx?.token ? "space-between" : "space-evenly"}`} bgColor={colorCtx.background} border={"0"} borderTop={"1px"} sx={{ borderImageSlice: 1, borderImageSource: colorCtx.gradientToRight }}>
            {userCtx?.token ? (<>
                <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
                    {({ isActive }) => (
                        <Icon as={isActive ? AiFillHome : AiOutlineHome} fontSize="1.7em" />
                    )}
                </NavLink>
                <NavLink to="/search" style={{ display: "flex", alignItems: "center" }}>
                    {({ isActive }) => (
                        <Icon as={isActive ? RiSearch2Fill : RiSearch2Line} fontSize="1.7em" />
                    )}
                </NavLink>
                <NavLink to="/create" style={{ display: "flex", alignItems: "center" }}>
                    {({ isActive }) => (
                        <Icon as={isActive ? RiAddBoxFill : RiAddBoxLine} fontSize="1.7em" />
                    )}
                </NavLink>
                <NavLink to="/friends" style={{ display: "flex", alignItems: "center" }}>
                    {({ isActive }) => (
                        <Icon as={isActive ? HiUsers : HiOutlineUsers} fontSize="1.7em" />
                    )}
                </NavLink>
                <Box>
                    <UserMenu />
                </Box>
            </>)
                :
                (<>
                    <Box>
                        <ModalWBtn btnTxt="Sign In" modalTitle="Sign into your account" modalBody={<AuthForm authType="login" btnTxt="Sign In" />} />
                    </Box>
                    <Divider h="1.5rem" orientation='vertical' />
                    <Box>
                        <ModalWBtn btnTxt="Sign Up" modalTitle="Create an account" modalBody={<AuthForm authType="register" btnTxt="Sign Up" />} />
                    </Box>
                </>)}
        </Flex>
    );
};

export default Footer;