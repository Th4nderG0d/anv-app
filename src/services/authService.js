// import TokenService from './tokenService'
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

import axios from "axios";
const API_URL = "http://localhost:3000/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      alert("You have successfully logged in");
      axios.post(API_URL + "fetchCurrentSignedInUser",  {
      "id" : 1,
      "email" : email,
      "role" : "ADMIN_USER",
      "username" : "username",
    })
    });
};

// function LoadData() {
//   const [authState, setAuthState] = useContext(UserContext);

//   login().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       setAuthState({
//         ...authState,
//         _id: data.user._id,
//         username: data.user.username,
//         email: data.user.email,
//         password: data.user.password,
//       });
//     }
//   })

//   // return authState;
// };

const logout = () => {
  // TokenService.removeUSer("user");
  // localStorage.removeItem("user");
  // sessionStorage.clear();
  axios.delete(API_URL + "fetchCurrentSignedInUser/1").then( (response) => {
    console.log("Logged out : " +response);
  }).catch((error) => {
    
  })
  alert("You have been logged out!");
   window.location.reload();
};
const getCurrentUser = async () => {
let user;
await axios.get(API_URL + "fetchCurrentSignedInUser").then((response) => { 
   console.log(response.data + " Username is " +response.data.username)
   user = response;
 }).catch((error) => {
   alert("Please sign in !" + error);
 })
  return user.data;
};

export default { register, login, logout, getCurrentUser, };
