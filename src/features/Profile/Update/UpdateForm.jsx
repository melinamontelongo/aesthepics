import { useForm } from 'react-hook-form';

import Form from "../../../components/Form/Form";
import FormCtrl from '../../../components/Form/FormCtrl';
import TextareaCtrl from '../../../components/Form/TextareaCtrl';
import { userUpdate } from '../../../services/reqUser';
import AuthContext  from '../../../context/AuthContext';
import { useContext } from 'react';
import AlertContext from '../../../context/AlertContext';

const UpdateForm = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();
    const userCtx = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);

    const onSubmit = async (values) => {
        const userID = userCtx.user._id;
        const response = await userUpdate({...values, userID}, { headers: { authorization: userCtx.token } });
        if(response.status === 200){
            alertCtx.success(response.data.message);
            userCtx.getUserState();
        } else{
            alertCtx.error(response.data.message);
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} btnTxt="Update" submitting={isSubmitting}>
            <FormCtrl
                register={register("firstName")}
                type="text"
                label="First Name"
                error={errors["firstName"]}
                defaultValue={userCtx.user.firstName}
                />
            <FormCtrl
                register={register("lastName")}
                type="text"
                label="Last Name"
                error={errors["lastName"]} 
                defaultValue={userCtx.user.lastName}
                />
            <TextareaCtrl
                register={register("bio")}
                label="Your bio"
                error={errors["bio"]} 
                defaultValue={userCtx.user.bio}
                />
        </Form>
    );
};

export default UpdateForm;