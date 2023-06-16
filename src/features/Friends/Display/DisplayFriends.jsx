import { useGetFriends } from "../../../hooks/useGetFriends";
import CardWAvatar from "../../../components/Card/CardWAvatar";
import { Text } from "@chakra-ui/react";
import Loader from "../../../components/Loader/Loader";

const DisplayFriends = () => {
    const { friends, loading } = useGetFriends();

    return (
        <>
            {loading ? <Loader /> :
                friends.length > 0 ?
                    <>
                        <Text mb="1rem" py="1rem">Your friends</Text>
                        {friends.map((friend) => {
                            return <CardWAvatar key={`friend${friend._id}`} linkToId={friend._id} avatarPic={friend.profilePic} name={friend.username} txt={friend.bio} />
                        })}</>
                    :
                    <Text mb="1rem" py="1rem">Seems like you have no friends :(</Text>
            }

        </>
    );
};

export default DisplayFriends;