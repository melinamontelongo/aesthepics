import CardWAvatar from "../../../components/Card/CardWAvatar";
import Loader from "../../../components/Loader/Loader";
import { useGetRandomUsers } from "../../../hooks/useGetRandomUsers";
import { Text } from "@chakra-ui/react";

const DisplayOtherUsers = () => {
    const { users, loading } = useGetRandomUsers();

    return (
        <>{loading ? <Loader />
            :
            <>
                <Text mb="1rem" py="1rem">Suggestions</Text>
                {users?.map((user) => {
                    return <CardWAvatar key={`user${user._id}`} linkToId={user._id} name={user.username} avatarPic={user.profilePic} txt={user.bio} />
                })}
            </>
        }
        </>
    )
};

export default DisplayOtherUsers;