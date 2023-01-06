import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

export function findUsersByName(name) {
  const response = axios.get(`${BASE_URL}/users?name=${name}`).catch((err) => err.response);

  return response;
}
