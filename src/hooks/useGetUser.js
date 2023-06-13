import { useEffect, useState } from "react";
import { getUser } from "../services/reqUser";

export const useGetUserID = () => {
    return window.localStorage.getItem("userID");
};

export const useGetUsername = () => {
    return window.localStorage.getItem("username");
};

export const useGetUser = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [isError, setIsError] = useState(false);
    const userID = useGetUserID();

    const getUserState = async () => {
        setLoading(true);
        if (userID) {
            const response = await getUser(userID);
            if (response.status === 200) {
                setUser(response.data.user);
            } else {
                setIsError(true);
            };
        }
        setLoading(false);
    };

    useEffect(() => {
        getUserState();
    }, [userID]);

    return { user, loading, getUserState }
}
