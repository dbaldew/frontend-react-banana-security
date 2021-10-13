import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";


function SignIn() {

    const {toggleAuth} = useContext(AuthContext);
    const {isAuth} = useContext(AuthContext);

//set state to logged in
    function handleClick(){
        if(!isAuth)toggleAuth(isAuth);
        console.log("Gebruiker is ingelogd!")
        console.log(isAuth)
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
        <p>*invoervelden*</p>
        <button type="button"
                onClick={handleClick}
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;