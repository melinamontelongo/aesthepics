import { useEffect, useState } from "react"
import { getUser } from "../services/reqUser";
import { getAllPosts, getOnePost } from "../services/reqPost";


export const useGetAllPostsPagination = () => {
    
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isError, setIsError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getAllPostsState = async () => {
        if(pageNumber > 0 && pageNumber >= totalPages ){
            setHasMore(false);
        };
        const response = await getAllPosts(pageNumber);
        if (response.status === 200) {
            let counter = 0;
            response.data.posts.forEach(async (post, index, array) => {
                counter++;
                const user = await getUser(post.userOwner);
                post.username = user.data.user.username;
                post.profilePic = user.data.user.profilePic;
                if (array.length === counter) setPosts([...posts, ...response.data.posts]);
            });
            setPageNumber(pageNumber + 1)
            setTotalPages(+response.data.total);
        } else {
            setIsError(true);
        };
    };

    useEffect(() => {
            getAllPostsState();
    }, []);
    return { posts, isError, hasMore, getAllPostsState };
};

export const useGetOnePost = (postId) => {
    const [post, setPost] = useState({})
    const getPost = async() => {
        const response = await getOnePost(postId);
        setPost(response.data.post);
    };

    useEffect(() => {
        if(postId){
            getPost();
        }
    }, [postId]);

    return { post };
}
