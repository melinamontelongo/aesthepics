import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import { addFriend, removeFriend } from "../../../services/reqUser";
import AlertContext from "../../../context/AlertContext";


const FriendBtn = ({ isAdd, friendID }) => {
    const user = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);

    const friend = async () => {
        let response;
        if (isAdd) {
            response = await addFriend(user.user._id, friendID, { headers: { authorization: user.token } });
        } else {
            response = await removeFriend(user.user._id, friendID, { headers: { authorization: user.token } });
        };
        if (response.status === 200) {
            alertCtx.success(response.data.message);
        } else {
            alertCtx.error(response.data.message);
        };
        user.getUserState();
    };

    return (<>
        <Button onClick={() => friend()}>{isAdd ? "Add Friend" : "Remove Friend"}</Button>
    </>
    )
}

export default FriendBtn;