import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import ColorContext from "../../context/ColorContext";

const AlertDialogComp = ({ isVisible, setVisible, actionFn, header, body, action }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const cancelRef = useRef(null);
    const colorCtx = useContext(ColorContext);

    useEffect(() => {
        if (isVisible) {
            onOpen();
        }
    }, [isVisible]);

    const actionAndClose = () => {
        actionFn();
        onClose();
        setVisible(false);
    };

    const closeAndSetVisible = () => {
        onClose();
        setVisible(false);
    }
    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={closeAndSetVisible}
        >
            <AlertDialogOverlay>
                <AlertDialogContent bgColor={colorCtx.accent}>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {header}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {body}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button variant="outline" ref={cancelRef} onClick={() => closeAndSetVisible()}>
                            Cancel
                        </Button>
                        <Button variant="outline" onClick={() => actionAndClose()} ml={3}>
                            {action}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AlertDialogComp;