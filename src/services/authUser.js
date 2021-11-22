import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3000/";

const getPublicUser = () => {
  return axios.get(API_URL + "users");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModerateBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicUser,
  getUserBoard,
  getModerateBoard,
  getAdminBoard,
};
