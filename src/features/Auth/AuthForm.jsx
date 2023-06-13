import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { passwordValidation, usernameValidation } from './formValidation';

import Form from '../../components/Form/Form';
import FormCtrl from '../../components/Form/FormCtrl';
import { userAuth } from '../../services/reqUser';
import AlertComp from '../../components/Alert/AlertComp';
import { useState } from 'react';

const AuthForm = ({ authType, btnTxt }) => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();
    const [_, setCookie] = useCookies(["access_token"]);
    
    //  Alert state
    const [alertMessage, setAlertMessage] = useState("");
    const [alertStatus, setAlertStatus] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const onSubmit = async (values) => {
        setIsAlertVisible(false);
        try {
            const response = await userAuth(authType, values);
            if (response.status === 200) {
                if (authType === "login") {
                    //  Store credentials
                    setCookie("access_token", response.data.token);
                    window.localStorage.setItem("userID", response.data.userID);
                    window.localStorage.setItem("username", response.data.username);
                };
                setAlertStatus("success");
            } else {
                setAlertStatus("error");
            };
            setAlertMessage(response.data.message);
        } catch (e) {
            setAlertMessage(e.response.message);
            setAlertStatus("error");
        };
        setIsAlertVisible(true);
    };
    
    return (<>
        <AlertComp isVisible={isAlertVisible} message={alertMessage} status={alertStatus} />
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