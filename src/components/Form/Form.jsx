import { VStack, Button } from "@chakra-ui/react";
import Loader from "../Loader/Loader";

const Form = ({ onSubmit, btnTxt, submitting, children }) => {
    return (
        <form onSubmit={onSubmit} width="100%">
            <VStack spacing="2rem" width="100%" display="flex">
                {children}
                {
                    btnTxt &&
                    <Button
                        isLoading={submitting}
                        spinner={<Loader />}
                        colorScheme="solid"
                        type="submit"
                        width="100%"
                        variant="solid">
                        {btnTxt}
                    </Button>
                }
            </VStack>
        </form>
    )
};

export default Form;

