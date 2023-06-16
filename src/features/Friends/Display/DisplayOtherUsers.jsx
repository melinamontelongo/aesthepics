import { useEffect, useState } from "react";
import { getRandomUsers } from "../../../services/reqUser";
import CardWAvatar from "../../../components/Card/CardWAvatar";
import { useGetRandomUsers } from "../../../hooks/useGetRandomUsers";

const DisplayOtherUsers = () => {
    const { users } = useGetRandomUsers();

    return (
        <>
            Suggestions
            {users?.map((user) => {
                return <CardWAvatar key={`user${user._id}`} linkToId={user._id} name={user.username} avatarPic={user.profilePic} txt={user.bio} />
            })}
        </>
    )
};

export default DisplayOtherUsers;