import { useEffect, useState } from "react";
import { getUser } from "../services/reqUser";
import { useGetUser } from "./useGetUser";

export const useGetFriends = () => {
    const { user } = useGetUser();
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUserFriends = async () => {
        let counter = 0;
        const friendsArr = [];
        await user?.friends?.forEach(async (friend, index, array) => {
            counter++;
            const response = await getUser(friend);
            if (response.status === 200) {
                //  Not repeated friends
                const checkRepeated = friends.filter(f => f._id === response.data.user._id);
                if (friends[friends?.length - 1]?._id === response.data.user._id || checkRepeated.length > 0) return;
                friendsArr.push(response.data.user);
                if (array.length === counter) setFriends(friendsArr);
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