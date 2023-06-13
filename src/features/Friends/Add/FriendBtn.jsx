import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { addFriend, removeFriend } from "../../../services/reqUser";
import AlertContext from "../../../context/AlertContext";


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
        <Button onClick={() => friend()}>{isAdd ? "Add Friend" : "Remove Friend"}</Button>
    </>
    )
}

export default FriendBtn;