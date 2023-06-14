import { useEffect, useState } from "react"
import { getOnePost } from "../services/reqPost";
import { getUser } from "../services/reqUser";

export const useGetPostComments = (postId) => {
    const [postComments, setPostComments] = useState();
    const [loading, setLoading] = useState(true);

    const getComments = async () => {
        const post = await getOnePost(postId);
        const postComments = post.data.post.comments;
        let counter = 0;
        console.log(postComments)
        postComments?.forEach(async(comment) => {
            counter ++;
            const user = await getUser(comment.userOwner);
            comment.ownerUsername = user.data.user.username;
            comment.ownerProfilePic = user.data.user.profilePic;
        });
        setPostComments(postComments);
        setLoading(false);
    };

    useEffect(() => {
        if(postId){
            getComments();
        }
    }, [postId]);
    return { postComments, loading, getComments };
}