import { Alert, AlertIcon, AlertDescription, CloseButton, useDisclosure, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { alertVariants } from "../../utils/componentVariants";
import AlertContext from "../../context/AlertContext";


const AlertComp = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const alertCtx = useContext(AlertContext);

    useEffect(() => {
        if (alertCtx.isVisible) {
            onOpen();
            const alertTimeout = setTimeout(() => {
                alertCtx.clear();
                onClose();
            }, 1500);
            return () => {
                clearTimeout(alertTimeout)
            }
        }
    }, [alertCtx.isVisible]);

    const closeAlert = () => {
        alertCtx.clear();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen &&
                <Flex justifyContent={"center"}>
                    <Alert
                        as={motion.div} variants={alertVariants} initial={"initial"} animate={"final"} exit={"exit"}
                        variant='subtle' status={alertCtx.status} p="1rem" justifyContent="space-between" position="fixed" my="5rem" zIndex="50" w={{ md: "50%", base: "100%" }}>
                        <Flex>
                            <AlertIcon />
                            <AlertDescription>{alertCtx.message}</AlertDescription>
                        </Flex>
                        <CloseButton onClick={() => closeAlert()} />
                    </Alert>
                </Flex>}
        </AnimatePresence>
    );
};

export default AlertComp;