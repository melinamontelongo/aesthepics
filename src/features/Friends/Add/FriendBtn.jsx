import { Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/context";
import { addFriend, removeFriend } from "../../../services/reqUser";


const FriendBtn = ({ isAdd, friendID }) => {
    const user = useContext(AuthContext);

    const friend = async () => {
        if (isAdd) {
            const response = await addFriend(user.user._id, friendID, { headers: { authorization: user.token } });
            alert(response.data.message);
        } else {
            const response = await removeFriend(user.user._id, friendID, { headers: { authorization: user.token } });
            alert(response.data.message);
        };
        user.getUserState();
    };

    return (
        <Button onClick={() => friend()}>{isAdd ? "Add Friend" : "Remove Friend"}</Button>
    )
}

export default FriendBtn;