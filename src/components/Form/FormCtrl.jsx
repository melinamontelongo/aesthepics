import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react';

const FormCtrl = ({ value, defaultValue, inputId, fileRef, label, error, register, type, placeholder, inputStyleProps, onChange, sx }) => {
    return (
        <FormControl isInvalid={error} w="100%">
            <FormLabel>{label}</FormLabel>
            <Input
                _placeholder={{ fontStyle: "italic" }}
                px="1rem"
                id={inputId}
                defaultValue={defaultValue}
                value={value}
                ref={fileRef}
                {...(register && { ...register })}
                type={type}
                placeholder={placeholder}
                {...inputStyleProps}
                onChange={onChange}
                sx={sx} />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    );
};

export default FormCtrl;