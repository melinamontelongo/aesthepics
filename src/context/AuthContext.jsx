import { createContext } from 'react';
import { useCookies } from "react-cookie";
import { useGetUser } from '../hooks/useGetUser';

const AuthContext = createContext(null);

const AuthProvider = (props) => {
    const [token, _] = useCookies(["access_token"]);
    const { user, loading, getUserState } = useGetUser();

    return (
        <AuthContext.Provider value={{ token: token.access_token, user, loading, getUserState }}>
            {props.children}
        </AuthContext.Provider>
    )
};
export { AuthProvider };
export default AuthContext;