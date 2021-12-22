
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducers";


const INTITIAL_START = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INTITIAL_START);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INTITIAL_START);


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return <AuthContext.Provider 
    value={{
        user: state.user, 
        isFetching: state.isFetching,
         error: state.error,
          dispatch
        }}
    > 
        {children}
    </AuthContext.Provider>
}