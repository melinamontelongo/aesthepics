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

const CreatePost = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    //  Alert state
    const [alertMessage, setAlertMessage] = useState("");
    const [alertStatus, setAlertStatus] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const onSubmit = async (values) => {
        setIsAlertVisible(false);
        const postData = new FormData();
        postData.append("image", values.postPic[0]);
        postData.append("description", values.description);
        const response = await postPost(user.user._id, postData, user.token);
        if (response.status === 200) {
            setAlertStatus("success");
        } else {
            setAlertStatus("error");
        };
        setAlertMessage(response.data.message);
        setIsAlertVisible(true);
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }
    return (<>
        <AlertComp isVisible={isAlertVisible} status={alertStatus} message={alertMessage} />
        <Form btnTxt="Create new post" onSubmit={handleSubmit(onSubmit)} submitting={isSubmitting}>
            <FormLabel alignSelf="start" mb="0" pb="0">Choose a picture</FormLabel>
            <SubmitPic register={register("postPic", picValidation)} error={errors["postPic"]} />
            <TextareaCtrl label="Description" register={register("description", descriptionValidation)} error={errors["description"]} />
        </Form></>
    );
};

export default CreatePost;