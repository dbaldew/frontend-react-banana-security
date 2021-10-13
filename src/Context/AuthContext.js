import {createContext, useState} from "react";

//create AuthContext with createContext function / export / null
export const AuthContext = createContext({});

//create AuthContext.Provider component/children
function AuthContextProvider({children}){

    //state Auth
    const [isAuth, toggleIsAuth] = useState(false);

    //toggleAuth
    function toggleAuth(){
        toggleIsAuth(!isAuth);
    }

    return (
        <AuthContext.Provider value={{toggleAuth:toggleAuth, isAuth:isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

//Export AuthContextProvider function
export default AuthContextProvider;