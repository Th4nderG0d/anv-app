import "./App.css";
import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import authService from "./services/authService";
import CurrentUser from "./users/CurrentUser";
import ModUser from "./users/ModUser";
import AdminUser from "./users/AdminUser";
import withAuthentication from './context/withAuthentication';
import Navigation from "./components/Navigation";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [showModUser, setShowModUser] = useState(false);
  const [showAdminUser, setShowAdminUser] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModUser(false);
      setShowAdminUser(false);
    }
  }, []);

  // useEffect(()=>{
  //   authService.LoadData()
  // },[])

  const logOut = () => {
    authService.logout();
    setCurrentUser(false);
  };

  return (
    <Router>
      <div className="App">
        {/* <h1>Welcome {currentUser}</h1> */}
        <Navigation/>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/user">
            <CurrentUser />
          </Route>
          <Route path="/mod">
            <ModUser />
          </Route>
          <Route path="/admin">
            <AdminUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
