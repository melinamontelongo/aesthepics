import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react';

const FormCtrl = ({ value, defaultValue, inputId, fileRef, label, error, register, type, placeholder, inputStyleProps, onChange }) => {

    return (
        <FormControl isInvalid={error} w="100%">
            <FormLabel fontWeight={"bold"}>{label}</FormLabel>
            <Input
                id={inputId}
                defaultValue={defaultValue}
                value={value}
                ref={fileRef}
                {...(register && { ...register })}
                type={type}
                placeholder={placeholder}
                {...inputStyleProps}
                onChange={onChange} />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    );
};

export default FormCtrl;