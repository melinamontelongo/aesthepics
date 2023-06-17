import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import ColorContext from '../../context/ColorContext';

const ModalWBtn = ({ btnTxt, modalTitle, modalBody }) => {
    const colorCtx = useContext(ColorContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen} mx={{ md: "0.2rem", lg: "1rem" }} py={{ md: "0.2rem", lg: "1.5rem" }}>{btnTxt}</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay zIndex={"40"}/>
                <ModalContent bgColor={colorCtx.background} borderWidth="thin">
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="1.7rem">
                        {modalBody}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
};

export default ModalWBtn;