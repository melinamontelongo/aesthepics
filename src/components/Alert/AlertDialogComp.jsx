import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const AlertDialogComp = ({ isVisible, actionFn }) => {

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
                        Delete Customer
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={() => actionAndClose()} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AlertDialogComp;