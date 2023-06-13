import CardWAvatar from '../../../components/Card/CardWAvatar';

const FriendCard = ({ friendName, friendPic, friendBio, friendId }) => {

    return (
        <CardWAvatar avatarPic={friendPic} linkToId={friendId} name={friendName} txt={friendBio} />
    );
};

export default FriendCard;