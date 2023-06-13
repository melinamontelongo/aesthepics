import FriendCard from "./FriendCard";
import { useGetFriends } from "../../../hooks/useGetFriends";

const DisplayFriends = () => {
    const {friends, loading} = useGetFriends();

    return (
        <>
            {loading ? <p>Loading...</p> :
                friends.length > 0 ? friends.map((friend) => {
                    return <FriendCard key={`friend${friend._id}`} friendId={friend._id} friendName={friend.username} friendPic={friend.profilePic} friendBio={friend.bio} />
                })
                :
                <p>No friends :(</p>
            }

        </>
    );
};

export default DisplayFriends;