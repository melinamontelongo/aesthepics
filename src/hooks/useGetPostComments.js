import { useEffect, useState } from "react"
import { getOnePost } from "../services/reqPost";
import { getUser } from "../services/reqUser";

export const useGetPostComments = (postId) => {
    const [postComments, setPostComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getComments = async () => {
        const post = await getOnePost(postId);
        console.log("post on getComments fn ", post)
        const comments = post.data.post.comments;
        let counter = 0;
        await comments?.forEach(async (comment, index, array) => {
            counter++;
            const user = await getUser(comment.userOwner);
            comment.ownerUsername = user.data.user.username;
            comment.ownerProfilePic = user.data.user.profilePic;
            //  Not repeated comments
            const repeatedIds = postComments.filter((c) => c.commentId === comment.commentId);
            if (repeatedIds.length > 0) return
            if(counter === comments.length) setPostComments(comments);
        });
        setLoading(false);
    };

    useEffect(() => {
        if (postId) {
            getComments();
        }
    }, [postId]);
    return { postComments, loading, getComments, setPostComments };
}