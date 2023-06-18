import { FormControl, FormLabel, Textarea, FormErrorMessage } from '@chakra-ui/react'

const TextareaCtrl = ({ defaultValue, label, error, register, placeholder, textareaStyle, sx }) => {
    return (<>
        <FormControl isInvalid={error}>
            <FormLabel>{label}</FormLabel>
            <Textarea
                _placeholder={{ fontStyle: "italic" }}
                px="1rem"
                defaultValue={defaultValue}
                {...register}
                placeholder={placeholder}
                {...textareaStyle}
                sx={sx}
            />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    </>
    );
};

export default TextareaCtrl;