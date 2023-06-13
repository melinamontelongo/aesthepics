import { useForm } from "react-hook-form";
import Form from "../../../components/Form/Form";
import SubmitPic from "../../../components/Form/SubmitPic";
import TextareaCtrl from "../../../components/Form/TextareaCtrl";
import { picValidation, descriptionValidation } from "../../../utils/picValidation";
import { Divider, FormLabel, Text } from "@chakra-ui/react";
import { postPost } from "../../../services/reqPost";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
import { useNavigate } from "react-router-dom";
import AlertComp from "../../../components/Alert/AlertComp";
import AlertContext from "../../../context/AlertContext";

const CreatePost = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();
    const user = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const postData = new FormData();
        postData.append("image", values.postPic[0]);
        postData.append("description", values.description);
        const response = await postPost(user.user._id, postData, user.token);
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
        <Form btnTxt="Create new post" onSubmit={handleSubmit(onSubmit)} submitting={isSubmitting}>
            <FormLabel alignSelf="start" mb="0" pb="0">Choose a picture</FormLabel>
            <SubmitPic register={register("postPic", picValidation)} error={errors["postPic"]} />
            <TextareaCtrl label="Description" register={register("description", descriptionValidation)} error={errors["description"]} />
        </Form></>
    );
};

export default CreatePost;