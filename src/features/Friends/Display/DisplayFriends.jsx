import { useGetFriends } from "../../../hooks/useGetFriends";
import CardWAvatar from "../../../components/Card/CardWAvatar";
import Loader from "../../../components/Loader/Loader";
import InfoText from "../../../components/Text/InfoText";
import H4 from "../../../components/Text/H4";

const DisplayFriends = () => {
    const { friends, loading } = useGetFriends();

    return (
        <>
            {loading ? <Loader /> :
                friends.length > 0 ?
                    <>
                        <H4 text="Your friends"/>
                        {friends.map((friend) => {
                            return <CardWAvatar key={`friend${friend._id}`} linkToId={friend._id} avatarPic={friend.profilePic} name={friend.username} txt={friend.bio} />
                        })}</>
                    :
                    <InfoText text="Seems like you have no friends. Why don't you add some?"/>
            }

        </>
    );
};

export default DisplayFriends;