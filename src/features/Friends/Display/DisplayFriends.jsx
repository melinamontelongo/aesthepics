import { useGetFriends } from "../../../hooks/useGetFriends";
import CardWAvatar from "../../../components/Card/CardWAvatar";

const DisplayFriends = () => {
    const { friends, loading } = useGetFriends();

    return (
        <> Your friends
            {loading ? <p>Loading...</p> :
                friends.length > 0 ? friends.map((friend) => {
                    return <CardWAvatar key={`friend${friend._id}`} linkToId={friend._id} avatarPic={friend.profilePic} name={friend.username} txt={friend.bio} />
                })
                    :
                    <p>No friends :(</p>
            }

        </>
    );
};

export default DisplayFriends;