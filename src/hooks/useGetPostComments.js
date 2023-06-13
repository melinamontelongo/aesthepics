import { useEffect, useState } from "react"
import { getOnePost } from "../services/reqPost";

export const useGetPostComments = (postId) => {
    const [postComments, setPostComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getComments = async () => {
        const post = await getOnePost(postId);
        const postComments = post.data.post.comments;
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