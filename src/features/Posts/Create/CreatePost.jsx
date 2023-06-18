import { useForm } from "react-hook-form";
import Form from "../../../components/Form/Form";
import SubmitPic from "../../../components/Form/SubmitPic";
import TextareaCtrl from "../../../components/Form/TextareaCtrl";
import { picValidation, descriptionValidation } from "../../../utils/picValidation";
import { FormLabel } from "@chakra-ui/react";
import { postPost } from "../../../services/reqPost";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../../context/AlertContext";
import H4 from "../../../components/Text/H4";
import ColorContext from "../../../context/ColorContext";

const CreatePost = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();
    const userCtx = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);
    const colorCtx = useContext(ColorContext);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const postData = new FormData();
        postData.append("image", values.postPic[0]);
        postData.append("description", values.description);
        const response = await postPost(userCtx.user._id, postData, userCtx.token);
        if (response.status === 200) {
            alertCtx.success(response.data.message);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            alertCtx.error(response.data.message);
        };
    }
    return (<>
        <H4 text="Create new post" />
        <Form btnTxt="Create new post" onSubmit={handleSubmit(onSubmit)} submitting={isSubmitting}>
            <FormLabel alignSelf="start" mb="0" pb="0">Choose a picture</FormLabel>
            <SubmitPic register={register("postPic", picValidation)} error={errors["postPic"]} />
            <TextareaCtrl
                label="Description"
                register={register("description", descriptionValidation)}
                error={errors["description"]} 
                sx={{ borderImageSlice: 1, borderImageSource: colorCtx.gradientToRight }}
                />
        </Form></>
    );
};

export default CreatePost;