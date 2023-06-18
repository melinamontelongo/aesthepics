import { Button, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { addFriend, removeFriend } from "../../../services/reqUser";
import AlertContext from "../../../context/AlertContext";
import { HiOutlineUserAdd, HiOutlineUserRemove } from "react-icons/hi";

const FriendBtn = ({ isAdd, friendID }) => {
    const userCtx = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);

    const friend = async () => {
        let response;
        if (isAdd) {
            response = await addFriend(userCtx.user._id, friendID, { headers: { authorization: userCtx.token } });
        } else {
            response = await removeFriend(userCtx.user._id, friendID, { headers: { authorization: userCtx.token } });
        };
        if (response.status === 200) {
            alertCtx.success(response.data.message);
        } else {
            alertCtx.error(response.data.message);
        };
        userCtx.getUserState();
    };

    return (<>
        <Button mx={{ md: "0.2rem", lg: "1rem" }} py={{ md: "0.2rem", lg: "1.5rem" }} variant="outline" onClick={() => friend()}>{isAdd ? <>Add Friend <Icon as={HiOutlineUserAdd} ms="0.5rem"/></> : <>Unfriend <Icon as={HiOutlineUserRemove} ms="0.5rem"/></>}</Button>
    </>
    )
}

export default FriendBtn;