export const picValidation = {
    required: "You must select a picture",
    validate: {
        acceptedFormats: files =>
            ['image/jpeg', 'image/png', 'image/gif'].includes(
                files[0]?.type
            ) || 'Only PNG and JPEG',
        lessThan10MB: files => files[0]?.size < 10000000 || 'Max 10MB',
    },
};

export const descriptionValidation = {
    required: "Description is required",
};