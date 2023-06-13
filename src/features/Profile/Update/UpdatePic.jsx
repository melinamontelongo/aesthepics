import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
import { AiOutlinePlus } from "react-icons/ai";
import { useDisclosure, ButtonGroup, Button, VStack, Image, Icon, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, ModalFooter, Input, FormErrorMessage, useColorModeValue, Text, Box } from "@chakra-ui/react";
import { userPicDelete, userPicUpdate } from "../../../services/reqUser";
import { picValidation } from "../../../utils/picValidation";
import { useForm } from "react-hook-form";
import Form from "../../../components/Form/Form";
import SubmitPic from "../../../components/Form/SubmitPic";

const UpdatePic = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm();

    const bg = useColorModeValue("white", "black");

    const user = useContext(AuthContext);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isDeleting, setIsDeleting] = useState(false);

    const onSubmit = async (values) => {
        if (user.user.profilePic) {
            await removePicture();
        };
        const formData = new FormData();
        formData.append("image", values.profilePic[0]);
        const response = await userPicUpdate(user.user._id, formData, { headers: { authorization: user.token } });
        if (response.status === 200) {
            alert(response.data.message);
            //  Refetch user info to show updated pic
            user.getUser();
        } else {
            alert("An error occurred!");
        };
        onClose();
    }

    const removePicture = async () => {
        setIsDeleting(true);
        //  Obtain picture public id
        const picID = user.user.profilePic.split("/").pop().split(".png")[0];
        const response = await userPicDelete(user.user._id, picID, { headers: { authorization: user.token } });
        if (response.status === 200) {
            alert(response.data.message);
            //  Refetch user info to show updated pic
            user.getUser();
        } else {
            alert("An error occurred!");
        };
        setIsDeleting(false);
    };

    return (<>
        <ButtonGroup onClick={onOpen} cursor="pointer" justifyContent="center" alignItems="center" sx={{ '.img:hover ~ .ico, .ico:hover': { visibility: "visible" } }}>
            <Image className="img" src={user?.user?.profilePic} alt={user?.user?.username} fallbackSrc="/profileFallback.png" rounded="100%" w="10rem" h="10rem" objectFit="cover" _hover={{ "filter": 'auto', "brightness": '50%' }} />
            <Icon className="ico" visibility="hidden" as={AiOutlinePlus} position="absolute" />
        </ButtonGroup>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent bg={bg} borderWidth="thin" pb="1rem">
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