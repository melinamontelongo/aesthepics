import { useContext } from "react";
import { useColorMode, Avatar, MenuDivider, Box, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Spacer, Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ColorContext from "../../context/ColorContext";

const UserMenu = () => {
    const [_, setCookie, removeCookie] = useCookies(["access_token"]);
    const { colorMode, toggleColorMode } = useColorMode();
    const userCtx = useContext(AuthContext);
    const colorCtx = useContext(ColorContext);
    const navigate = useNavigate();

    const logout = () => {
        removeCookie("access_token");
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("username");
        navigate("/");
        navigate(0);
    };

    return (
        <Menu closeOnSelect={false}>
            <MenuButton as={Button} variant={{ md: "ghost" }} mx={{ md: "1rem" }} py={{ md: "1.5rem" }} w="100%">
                <Box display="flex" justifyContent="start" alignItems="center" gap="0.5rem" >
                    <Avatar name={userCtx?.user?.username} src={userCtx?.user?.profilePic} size='xs' />
                    <Text fontSize="1.1em" hideBelow="lg">Profile</Text>
                </Box>
            </MenuButton>
            <MenuList bgColor={colorCtx.background} px="0.5rem">
                <MenuItem as={Link} to={`/profile/${userCtx.user._id}`} bgColor={colorCtx.background} _hover={{ bgColor: colorCtx.accent }} rounded="md" py="0.5rem">
                    <Text fontWeight="bold">See profile</Text>
                    <Spacer />
                    <Icon as={CgProfile} />
                </MenuItem>
                <MenuDivider />
                <MenuItem as={Button} onClick={toggleColorMode} variant="ghost" bgColor={colorCtx.background}>
                    <Text>Switch Appearance</Text>
                    <Spacer />
                    {colorMode === 'light' ? <Icon as={BsFillMoonFill} /> : <Icon as={BsSunFill} />}
                </MenuItem>
                <MenuDivider />
                <MenuItem as={Button} variant="ghost" bgColor={colorCtx.background} onClick={logout}>
                    <Text>Log out</Text>
                    <Spacer />
                    <Icon as={FiLogOut} />
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserMenu;