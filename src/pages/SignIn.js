import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import {Link} from "react-router-dom";


function SignIn() {

    const {login} = useContext(AuthContext)

    function handleSubmit(e){
        e.preventDefault();
        login();
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor="email">email:
              <input type="text" id="email"/>
          </label>
          <label htmlFor="password">wachtwoord:
              <input type="text" id="password"/>
          </label>
        <button type="submit"
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;