import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react';
import { useContext } from 'react';
import ColorContext from '../../context/ColorContext';

const FormCtrl = ({ value, defaultValue, inputId, fileRef, label, error, register, type, placeholder, inputStyleProps, onChange, sx }) => {
    const colorCtx = useContext(ColorContext);
    return (
        <FormControl isInvalid={error} w="100%">
            <FormLabel>{label}</FormLabel>
            <Input
                borderRadius="0"
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
                sx={{...sx, borderImageSlice: 1, borderImageSource: colorCtx.gradientToRight }} />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    );
};

export default FormCtrl;