import {createContext, useState} from "react";

//create AuthContext with createContext function / export / null
export const AuthContext = createContext({});

//create AuthContext.Provider component/children
function AuthContextProvider({children}){

    //state Auth
    const [isAuth, toggleIsAuth] = useState(false);

    //toggleAuth
    function toggle(){
        toggleIsAuth(!isAuth);
        console.log(`auth status: ${isAuth}`)
    }

    return (
        <AuthContext.Provider value={{toggle: toggle}}>
            {children}
        </AuthContext.Provider>
    )
}

//Export AuthContextProvider function
export default AuthContextProvider;