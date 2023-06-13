import { VStack, Button } from "@chakra-ui/react"

const Form = ({ onSubmit, btnTxt, submitting, children }) => {
    return (
        <form onSubmit={onSubmit} width="100%">
            <VStack spacing="2rem" width="100%" display="flex">
                {children}
                {btnTxt && <Button isLoading={submitting} type="submit" width="100%">{btnTxt}</Button>}
            </VStack>
        </form>
    )
};

export default Form;

