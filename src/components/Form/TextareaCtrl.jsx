import { FormControl, FormLabel, Textarea, FormErrorMessage } from '@chakra-ui/react'

const TextareaCtrl = ({ defaultValue, label, error, register, placeholder, variant }) => {
    return (<>
        <FormControl isInvalid={error}>
            <FormLabel fontWeight="bold">{label}</FormLabel>
            <Textarea
                variant={variant}
                defaultValue={defaultValue}
                {...register}
                placeholder={placeholder}
            />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    </>
    );
};

export default TextareaCtrl;