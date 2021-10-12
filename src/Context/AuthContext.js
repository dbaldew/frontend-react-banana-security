import {createContext} from "react";

//create AuthContext with createContext function / export / null
export const AuthContext = createContext(null);

//create AuthContext.Provider component/children
function AuthContextProvider({children}){

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

//Export AuthContextProvider function
export default AuthContextProvider;