import { useEffect, useState } from "react";
import { useGetUser } from "./useGetUser";
import { getRandomUsers } from "../services/reqUser";

export const useGetRandomUsers = () => {
    const { user } = useGetUser();
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        if (user._id) {
            const randomUsers = await getRandomUsers(user._id);
            if (randomUsers.status === 200) {
                setUsers(randomUsers.data.users);
            };
        }
    };
    useEffect(() => {
        if (user._id) {
            getUsers();
        }
    }, [user._id]);

    return { users }
};

