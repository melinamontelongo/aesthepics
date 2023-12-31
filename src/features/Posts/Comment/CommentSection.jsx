import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai"
import { useForm } from "react-hook-form";
import { commentPost } from "../../../services/reqPost";
import { useContext } from "react";
import { useGetPostComments } from '../../../hooks/useGetPostComments';
import { deleteComment } from '../../../services/reqPost';
import AuthContext from "../../../context/AuthContext";
import TextareaCtrl from "../../../components/Form/TextareaCtrl";
import CommentCard from "./CommentCard";
import Loader from "../../../components/Loader/Loader";
import AlertContext from "../../../context/AlertContext";
import InfoText from "../../../components/Text/InfoText";
import ColorContext from "../../../context/ColorContext";

const CommentSection = ({ postId }) => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm();
    const { postComments, loading, getComments, setPostComments } = useGetPostComments(postId);
    const userCtx = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);
    const colorCtx = useContext(ColorContext);

    const onSubmit = async (value) => {
        const comment = {
            userOwner: userCtx.user._id,
            text: value.comment,
        };
        const response = await commentPost(comment, postId, userCtx.token);
        if (response.status === 200) {
            alertCtx.success(response.data.message);
            reset();
            getComments();
        } else {
            alertCtx.error(response.data.message);
        };
    };

    const deleteUserComment = async (commentId) => {
        const response = await deleteComment(commentId, postId, userCtx.token);
        if (response.status === 200) {
            alertCtx.success(response.data.message);
            setPostComments(postComments.filter(c => c.commentId !== commentId));
        } else {
            alertCtx.error(response.data.message);
        };
    };
    return (
        <>
            {loading ? <Loader />
                :
                postComments?.length > 0 ?
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
                    <Box mx="1rem">
                        <InfoText text="No comments yet... Be the first one!" />
                    </Box>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex alignItems="center" justifyContent="center" my="1rem">
                    <TextareaCtrl
                        placeholder="Add a comment..." register={register("comment", { required: true })}
                        variant={"flushed"}
                    />
                    <Button isLoading={isSubmitting} type="submit" mt="0.5rem" ml="0.5rem" variant="outline">
                        <Icon fontSize="xl" as={AiOutlineSend} />
                    </Button>
                </Flex>
            </form>
        </>
    );
};

export default CommentSection;