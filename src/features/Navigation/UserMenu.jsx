import { useColorMode, Avatar, useColorModeValue, SimpleGrid, Flex, MenuDivider, Divider, Box, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Spacer, Button } from "@chakra-ui/react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { useGetUser } from "../../hooks/useGetUser";

const UserMenu = () => {
    const [_, setCookie, removeCookie] = useCookies(["access_token"]);
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const bgColor = useColorModeValue("white", "black");
    const hoverbgColor = useColorModeValue("#edf2f7", "#141414");
    const user = useContext(AuthContext);

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
                    <Avatar name={user?.user?.username} src={user?.user?.profilePic} size='xs' />
                    <Text fontSize="1.1em" hideBelow="lg">Profile</Text>
                </Box>
            </MenuButton>
            <MenuList bgColor={bgColor} px="0.5rem">
                <MenuItem as={Link} to={`/profile/${user.user._id}`} bgColor={bgColor} _hover={{ bgColor: hoverbgColor }} rounded="md" py="0.5rem">
                    <Text fontWeight="medium">See profile</Text>
                    <Spacer />
                    <Icon as={CgProfile} />
                </MenuItem>
                <MenuDivider />
                <MenuItem as={Button} onClick={toggleColorMode} variant="ghost" bgColor={bgColor}>
                    <Text>Switch Appearance</Text>
                    <Spacer />
                    {colorMode === 'light' ? <Icon as={BsFillMoonFill} /> : <Icon as={BsSunFill} />}
                </MenuItem>
                <MenuDivider />
                <MenuItem as={Button} variant="ghost" bgColor={bgColor} onClick={logout}>
                    <Text>Log out</Text>
                    <Spacer />
                    <Icon as={FiLogOut} />
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserMenu;