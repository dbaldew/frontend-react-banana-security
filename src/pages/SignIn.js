import React, {useContext} from 'react';
import { useHistory,Link } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";


function SignIn() {

    const {toggleAuth} = useContext(AuthContext);
    const {isAuth} = useContext(AuthContext);
    const history = useHistory();

//set state to logged in - redirect to '/profile'
    function handleClick(){
        if(!isAuth)toggleAuth(isAuth);
        if(!isAuth)history.push('/profile');
        console.log("Gebruiker is ingelogd!")
        console.log(isAuth)
    }

//data object: nog doen

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
          <label htmlFor="email">email:
              <input type="text" id="email"/>
          </label>
          <label htmlFor="password">wachtwoord:
              <input type="text" id="password"/>
          </label>
        <button type="button"
                onClick={handleClick}
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;