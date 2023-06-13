import { useEffect, useState } from "react";
import { getUser } from "../services/reqUser";
import { useGetUser } from "./useGetUser";

export const useGetFriends = () => {
    const { user } = useGetUser();
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUserFriends = async () => {
        let counter = 0;
        await user?.friends?.forEach(async (friend, index, array) => {
            counter++;
            const response = await getUser(friend);
            if (response.status === 200 && array.length === counter) {
                //  Not repeated friends
                if (friends.length > 0 && friends[friends.length - 1]._id === response.data.user._id) return;
                setFriends([...friends, response.data.user]);
            } else {
                setIsError(true);
            };
        });
        setLoading(false);
    }

    useEffect(() => {
        if (user) {
            getUserFriends();
        }
    }, [user.friends]);

    return { friends, loading, getUserFriends }
}