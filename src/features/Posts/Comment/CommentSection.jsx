import TextareaCtrl from "../../../components/Form/TextareaCtrl";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai"
import { useForm } from "react-hook-form";
import { commentPost } from "../../../services/reqPost";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
import { useGetPostComments } from '../../../hooks/useGetPostComments';
import { deleteComment } from '../../../services/reqPost';
import CommentCard from "./CommentCard";
import Loader from "../../../components/Loader/Loader";

const CommentSection = ({ postId }) => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm();
    const { postComments, loading, getComments } = useGetPostComments(postId);
    const user = useContext(AuthContext);

    const onSubmit = async (value) => {
        const comment = {
            userOwner: user.user._id,
            ownerUsername: user.user.username,
            ownerProfilePic: user.user.profilePic,
            text: value.comment,
        };
        const response = await commentPost(comment, postId, user.token);
        if (response.status === 200) {
            alert(response.data.message);
            reset();
            getComments();
        } else {
            alert(response.data);
        }
    };

    const deleteUserComment = async(commentId) => {
        const response = await deleteComment(commentId, postId, user.token);
        if(response.status === 200){
            alert(response.data.message);
            getComments();
        } else {
            alert(response.data);
        };
    };
    return (
        <>{loading && <Loader />}

            {postComments?.length > 0 ?

                postComments?.map((comment, i) => {
                    return <CommentCard
                        key={`comment${comment.userOwner}${i}`}
                        linkToId={comment.userOwner}
                        txt={comment.text}
                        avatarPic={comment.ownerProfilePic}
                        name={comment.ownerUsername}
                        commentId={comment.commentId}
                        postId={postId}
                        deleteComment={deleteUserComment}
                    />
                })

                :

                <p>No comments yet...</p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex alignItems="center" justifyContent="center" my="1rem">
                    <TextareaCtrl placeholder="Add a comment..." register={register("comment")} textareaStyle={{ minHeight: "1rem", variant: "flushed" }} />
                    <Button isLoading={isSubmitting} type="submit" mt="0.5rem">
                        <Icon as={AiOutlineSend} />
                    </Button>
                </Flex>
            </form>
        </>
    );
};

export default CommentSection;