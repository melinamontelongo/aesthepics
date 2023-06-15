import { Alert, AlertIcon, AlertDescription, CloseButton, useDisclosure, Flex, Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import AlertContext from "../../context/AlertContext";


const AlertComp = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const alertCtx = useContext(AlertContext);

    useEffect(() => {
        if (alertCtx.isVisible) {
            onOpen();
        }
    }, [alertCtx.isVisible]);

    const closeAlert = () => {
        alertCtx.clear();
        onClose();
    };

    return (
        isOpen &&
        <Flex justifyContent={"center"}>
            <Alert variant='solid' status={alertCtx.status} p="1rem" justifyContent="space-between" position="fixed" my="5rem" zIndex="50" w={{md: "50%", base: "100%"}}>
                <Flex>
                    <AlertIcon />
                    <AlertDescription>{alertCtx.message}</AlertDescription>
                </Flex>
                <CloseButton onClick={() => closeAlert()} />
            </Alert>
        </Flex>
    );
};

export default AlertComp;