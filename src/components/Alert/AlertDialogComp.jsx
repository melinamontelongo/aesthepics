import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const AlertDialogComp = ({ isVisible, actionFn, header, body, action }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const cancelRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            onOpen();
        }
    }, [isVisible]);

    const actionAndClose = () => {
        actionFn();
        onClose();
    };
    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {header}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {body}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={() => actionAndClose()} ml={3}>
                            {action}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AlertDialogComp;