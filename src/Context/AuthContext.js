import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

//create AuthContext with createContext function / export / null
export const AuthContext = createContext({});

//create AuthContext.Provider component/children
function AuthContextProvider({children}) {

    //state Auth
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory();

    //set state to logged in - redirect to '/profile'
    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
        history.push("/profile");
    }

    //set state to logged out - redirect to '/'
    function logout() {
        console.log("Gebruiker is uitgelogd!")
        toggleIsAuth(false);
        history.push("/");
    }

    const contextData = {
        isAuth: isAuth,
        login:login,
        logout:logout,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

//Export AuthContextProvider function
export default AuthContextProvider;