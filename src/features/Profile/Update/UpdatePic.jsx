import { useContext, useState } from "react";
import { useDisclosure, ButtonGroup, Button, VStack, Image, Icon, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, Box } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { userPicDelete, userPicUpdate } from "../../../services/reqUser";
import { picValidation } from "../../../utils/picValidation";
import { useForm } from "react-hook-form";
import AuthContext from "../../../context/AuthContext";
import AlertContext from "../../../context/AlertContext";
import Form from "../../../components/Form/Form";
import SubmitPic from "../../../components/Form/SubmitPic";
import ColorContext from "../../../context/ColorContext";

const UpdatePic = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();

    const userCtx = useContext(AuthContext);
    const alertCtx = useContext(AlertContext);
    const colorCtx = useContext(ColorContext);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isDeleting, setIsDeleting] = useState(false);

    const onSubmit = async (values) => {
        if (userCtx.user.profilePic) {
            await removePicture();
        };
        const formData = new FormData();
        formData.append("image", values.profilePic[0]);
        const response = await userPicUpdate(userCtx.user._id, formData, { headers: { authorization: userCtx.token } });
        if (response.status === 200) {
            alertCtx.success(response.data.message);
            //  Refetch user info to show updated pic
            userCtx.getUserState();
        } else {
            alertCtx.error(response.data.message);
        };
        onClose();
    }

    const removePicture = async () => {
        setIsDeleting(true);
        //  Obtain picture public id
        const picID = userCtx.user.profilePic.split("/").pop().split(".png")[0];
        const response = await userPicDelete(userCtx.user._id, picID, { headers: { authorization: userCtx.token } });
        if (response.status === 200) {
            alertCtx.success(response.data.message);
            //  Refetch user info to show updated pic
            userCtx.getUserState();
        } else {
            alertCtx.error(response.data.message);
        };
        setIsDeleting(false);
        onClose();
    };

    return (<>
        <ButtonGroup onClick={onOpen} cursor="pointer" justifyContent="center" alignItems="center" sx={{ '.img:hover ~ .ico, .ico:hover': { visibility: "visible" } }} w={{sm: "10rem", base: "6rem"}} h={{sm: "10rem", base: "6rem"}} >
            <Image className="img" src={userCtx?.user?.profilePic} alt={userCtx?.user?.username} fallbackSrc="/profileFallback.png" rounded="100%" w={{sm: "10rem", base: "6rem"}} h={{sm: "10rem", base: "6rem"}} objectFit="cover" _hover={{ "filter": 'auto', "brightness": '50%' }} />
            <Icon className="ico" visibility="hidden" as={AiOutlinePlus} position="absolute" />
        </ButtonGroup>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent bg={colorCtx.background} borderWidth="thin" pb="1rem">
                <ModalHeader textAlign="center">Change Profile Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <SubmitPic register={register("profilePic", picValidation)} error={errors["profilePic"]} align="center"/>
                            </Box>
                            <Box>
                                <Button isLoading={isSubmitting} variant="ghost" w="100%" type="submit">Upload</Button>
                                <Button isLoading={isDeleting} variant="ghost" w="100%" onClick={() => removePicture()}>Remove Current Photo</Button>
                                <Button variant="ghost" w="100%" mx="auto" onClick={onClose}>Cancel</Button>
                            </Box>
                        </Form>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    );
};

export default UpdatePic;