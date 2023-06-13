export const usernameValidation = {
    required: "Username is required",
    minLength: {
        value: 4,
        message: "Username must have 4 or more characters"
    },
    pattern: {
        value: /[\w+\d+]/,
        message: "Invalid username"
    },
}

export const passwordValidation = {
    required: "Password is required",
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@_!])\S{6,}$/,
        message: "Password must contain 6 or more characters, including at least one uppercase, one lowercase and one special character (@, !, _)"
    },
}