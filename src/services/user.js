import axios from "axios";
import { createHeaders } from "./authService";

const BASE_URL = process.env.REACT_APP_API;

const { headers } = createHeaders();

export function findUsersByName(name) {
  const response = axios.get(`${BASE_URL}/users?name=${name}`, {headers}).catch((err) => err.response);

  return response;
}
