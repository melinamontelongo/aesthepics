export const postVariants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            type: "spring", stiffness: 50,
        }
    },
};

export const commentVariants = {
    initial: {
        x: "50vw",
    },
    final: {
        x: "0vw",
        transition: {
            type: "spring", damping: 15,
        }
    },
};

export const alertVariants = {
    initial: {
        y: "-50vh",
    },
    final: {
        y: "0vh",
        transition: {
            type: "spring", damping: 8,
        }
    },
    exit: {
        opacity: 0,
    }
};

export const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            type: "spring", damping: 2,
        },
    },
    tap: {
        scale: 0.9,
        transition: {
            type: "spring", damping: 2,
        }
    },
};