import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from "./Context/AuthContext";


function App() {

    //private route
    const {isAuth} = useContext(AuthContext);

    function PrivateRoute({children, isAuth}){
        return(
            <Route>
                {isAuth? children:<Redirect to="/"/>}
            </Route>
        )
    }

  return (
    <>
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/profile" isAuth={isAuth}>
            <Profile />
          </PrivateRoute>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
