import { Alert, AlertIcon, AlertDescription, CloseButton, useDisclosure, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const AlertComp = ({ status, message, isVisible }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    useEffect(() => {
        if(isVisible){
            onOpen();
        }
    }, [isVisible]);
    return (
        isOpen &&
        <Alert status={status} p="1rem" justifyContent="space-between">
            <Flex>
                <AlertIcon />
                <AlertDescription>{message}</AlertDescription>
            </Flex>
            <CloseButton onClick={onClose} />
        </Alert>
    );
};

export default AlertComp;