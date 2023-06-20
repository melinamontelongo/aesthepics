import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { passwordValidation, usernameValidation } from './formValidation';

import Form from '../../components/Form/Form';
import FormCtrl from '../../components/Form/FormCtrl';
import { userAuth } from '../../services/reqUser';
import { useContext } from 'react';
import AlertContext from '../../context/AlertContext';

const AuthForm = ({ authType, btnTxt }) => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm();
    const [_, setCookie] = useCookies(["access_token"]);
    
    const alertCtx = useContext(AlertContext);

    const onSubmit = async (values) => {
        const response = await userAuth(authType, values);
        if (response.status === 200) {
            if (authType === "login") {
                //  Store credentials
                setCookie("access_token", response.data.token);
                window.localStorage.setItem("userID", response.data.userID);
                window.localStorage.setItem("username", response.data.username);
            };
            alertCtx.success(response.data.message);
        } else {
            alertCtx.error(response.data.message);
        };
        reset();
    };

    return (<>
        <Form onSubmit={handleSubmit(onSubmit)} btnTxt={btnTxt} submitting={isSubmitting}>
            <FormCtrl
                register={register("username", usernameValidation)}
                label="Username"
                type="text"
                error={errors["username"]}
            />
            <FormCtrl
                register={register("password", authType === "register" ? passwordValidation : { required: passwordValidation.required })}
                label="Password"
                type="password"
                error={errors["password"]}
            />
        </Form>
    </>
    );
};

export default AuthForm;