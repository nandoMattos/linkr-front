import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

export function findAllPosts() {
  const response = axios.get(`${BASE_URL}/posts`).catch((err) => err.response);

  return response;
}