import { useGetRandomUsers } from "../../../hooks/useGetRandomUsers";
import CardWAvatar from "../../../components/Card/CardWAvatar";
import Loader from "../../../components/Loader/Loader";
import H4 from "../../../components/Text/H4";

const DisplayOtherUsers = () => {
    const { users, loading } = useGetRandomUsers();

    return (
        <>{loading ? <Loader />
            :
            <>
                <H4 text="Suggestions"/>
                {users?.map((user) => {
                    return <CardWAvatar key={`user${user._id}`} linkToId={user._id} name={user.username} avatarPic={user.profilePic} txt={user.bio} />
                })}
            </>
        }
        </>
    )
};

export default DisplayOtherUsers;