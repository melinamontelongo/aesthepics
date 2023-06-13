import { useForm } from 'react-hook-form';

import Form from "../../../components/Form/Form";
import FormCtrl from '../../../components/Form/FormCtrl';
import TextareaCtrl from '../../../components/Form/TextareaCtrl';
import { userUpdate } from '../../../services/reqUser';
import { AuthContext } from '../../../context/context';
import { useContext } from 'react';

const UpdateForm = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();
    const user = useContext(AuthContext);

    const onSubmit = async (values) => {
        const userID = user.user._id;
        const response = await userUpdate({...values, userID}, { headers: { authorization: user.token } });
        if(response.status === 200){
            alert(response.data.message);
            user.getUser();
        } else{
            alert("An error occurred!");
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} btnTxt="Update" submitting={isSubmitting}>
            <FormCtrl
                register={register("firstName")}
                type="text"
                label="First Name"
                error={errors["firstName"]}
                defaultValue={user.user.firstName}
                />
            <FormCtrl
                register={register("lastName")}
                type="text"
                label="Last Name"
                error={errors["lastName"]} 
                defaultValue={user.user.lastName}
                />
            <TextareaCtrl
                register={register("bio")}
                label="Your bio"
                error={errors["bio"]} 
                defaultValue={user.user.bio}
                />
        </Form>
    );
};

export default UpdateForm;