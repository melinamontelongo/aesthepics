import { VStack, Button } from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { buttonVariants } from "../../utils/componentVariants";

const Form = ({ onSubmit, btnTxt, submitting, children }) => {
    return (
        <form onSubmit={onSubmit} width="100%">
            <VStack spacing="2rem" width="100%" display="flex">
                {children}
                {
                    btnTxt &&
                    <Button as={motion.button} variants={buttonVariants} whileTap={"tap"} whileHover={"hover"}
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

