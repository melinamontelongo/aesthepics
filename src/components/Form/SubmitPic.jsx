import { useContext, useState } from "react";
import { Icon, Image, Text, Box } from "@chakra-ui/react";
import FormCtrl from "./FormCtrl";
import { AiOutlineCamera } from "react-icons/ai";
import ColorContext from "../../context/ColorContext";

const SubmitPic = ({ register, error }) => {
    const [picPreview, setPicPreview] = useState("");
    const [picPreviewName, setPicPreviewName] = useState("");

    const colorCtx = useContext(ColorContext);
    //  To display preview
    const readPreviewPic = (e) => {
        const pic = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                // convert image file to base64 string
                setPicPreview(reader.result);
            },
            false
        );
        if (pic) {
            reader.readAsDataURL(pic);
            setPicPreviewName(pic.name);
        }
    };
    return (
        <Box>
            <label>
                <Icon as={AiOutlineCamera} mx="auto" display="block" fontSize="3rem" cursor="pointer" textColor={error && "red.400"}/>
                <FormCtrl register={register} type="file" error={error}
                    inputStyleProps={{ "variant": "unstyled", "h": "0", "w": "0" }}
                    onChange={(e) => readPreviewPic(e)} />
            </label>
            {picPreview && (<>
                <Image src={picPreview} alt="Photo to upload preview" w="10rem" h="10rem" objectFit="cover" my="1rem" mx="auto" border="1px" sx={{ borderImageSlice: 1, borderImageSource: colorCtx.gradientToRight }} />
                <Text textAlign="center">{picPreviewName}</Text>
            </>)}
        </Box>
    )
};

export default SubmitPic;