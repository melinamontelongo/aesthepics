import { useState, createContext } from 'react';

const AlertContext = createContext({
    status: null,
    message: null,
    isVisible: null,
    success: () => {},
    error: () => {},
    clear: () => {},
});

const AlertProvider = (props) => {
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState(null);
    const [isVisible, setIsVisible] = useState(null);

    const success = (text) => {
        setStatus("success");
        setMessage(text);
        setIsVisible(true);
    };

    const error = (text) => {
        setStatus("error");
        setMessage(text);
        setIsVisible(true);
    };

    const clear = () => {
        setIsVisible(false);
    };
    return (
        <AlertContext.Provider
            value={{
                success, error, clear, status, message, isVisible
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export { AlertProvider };
export default AlertContext;