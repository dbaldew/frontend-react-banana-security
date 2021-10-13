import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";

function NavBar() {
    const history = useHistory();
    const {toggleAuth} = useContext(AuthContext);
    const {isAuth} = useContext(AuthContext);

    //set state to logged out - redirect to '/'
    function handleLogout(){
        if(isAuth)toggleAuth(!isAuth);
        history.push('/')
        console.log("Gebruiker is uitgelogd!")
        console.log(isAuth);
    }

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>
                <button
                    type="button"
                    onClick={() => history.push('/signin')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/signup')}
                >
                    Registreren
                </button>
                <button
                    type="button"
                    onClick={handleLogout}
                >
                    Log out
                </button>
            </div>
        </nav>
    );
}

export default NavBar;