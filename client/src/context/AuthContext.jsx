import { useContext, createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/service";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ registerError, setRegisterError ] = useState(null);
    const [ isRegisterLoading, setIsRegisterLoading ] = useState(false);
    const [ loginError, setLoginError ] = useState(null);
    const [ isLoginLoading, setIsLoginLoading ] = useState(false);

    const [ registerInfo, setRegisterInfo ] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [ loginInfo, setLoginInfo ] = useState({
        email: "",
        password: ""
    });

    // console.log(user)
    // console.log(loginInfo)

    useEffect(() => {
        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    }, [])

    // Register setRegisterInfo 
    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    // login setLoginInfo
    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    // register
    const registerUser = useCallback(async(e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

        setIsRegisterLoading(false);

        if (response.error) {
            return setRegisterError(response);
        }

        localStorage.setItem("User", JSON.stringify(response)) // storing user to local storate
        setUser(response); // storing user to state
    }, [registerInfo]);

    // login
    const loginUser = useCallback(async(e)=> {
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);

        const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));
        
        setIsLoginLoading(false);

        if (response.error) {
            return setLoginError(response);
        }

        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
    }, [loginInfo])

    // logout
    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    }, []);

    // add favorite recipe
    const addFavoriteRecipe = useCallback(async (recipeUri) => {
        if (user) {
            const { _id } = user;
            const response = await postRequest(`${baseUrl}/users/add-favorite`, JSON.stringify({ userId: _id, recipeUri }));
            if (!response.error) {
                setUser(response);
                const updatedUser = { ...user, favorites: response.favorites };
                localStorage.setItem('User', JSON.stringify(updatedUser));
            }
        }
    }, [user]);

    // remove favorite recipe
    const removeFavoriteRecipe = useCallback(async (recipeUri) => {
        if (user) {
            const { _id } = user;
            const response = await postRequest(`${baseUrl}/users/remove-favorite`, JSON.stringify({ userId: _id, recipeUri }));
            if (!response.error) {
                setUser(response);
                const updatedUser = { ...user, favorites: response.favorites };
                localStorage.setItem('User', JSON.stringify(updatedUser));
            }
        }
    }, [user]);

    return (
        <AuthContext.Provider 
            value={{
                user,
                // Register user
                registerInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegisterLoading,
                // Logout user
                logoutUser,
                // login user
                loginUser,
                updateLoginInfo,
                loginError,
                loginInfo,
                isLoginLoading,
                // Add favorite recipe
                addFavoriteRecipe,
                // Remove favorite recipe
                removeFavoriteRecipe,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuthContext() {
    return useContext(AuthContext)
}