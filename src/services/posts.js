import axios from "axios";
import { createHeaders } from "./authService";

const BASE_URL = process.env.REACT_APP_API;

const { headers } = createHeaders();

export function findAllPosts() {
  console.log(headers);

  const response = axios.get(`${BASE_URL}/posts`, {headers}).catch((err) => err.response);

  return response;
}

export function findPostsById(id) {
  const response = axios.get(`${BASE_URL}/posts/user/${id}`, {headers}).catch((err) => err.response);

  return response;
}

export function insertLike(id) {
  console.log(id)
  const response = axios.post(`${BASE_URL}/posts/${id}/like`,'', {headers}).catch((err) => console.log(err))

  return response;
}

export function deleteLike(id) {
  console.log(id)
  const response = axios.delete(`${BASE_URL}/posts/${id}/deslike`, {headers}).catch((err) => console.log(err))

  return response;
}

export async function addPost(body) {

  try {
  const response = await axios.post(`${BASE_URL}/posts`,body)
  return response;
  } catch (error) {
    console.log(error);
    alert("Houve um erro ao publicar seu link");
  }
}