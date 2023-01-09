import axios from "axios";
import { createHeaders } from "./authService";

const BASE_URL = process.env.REACT_APP_API;

const { headers } = createHeaders();

export function findAllPosts() {
  const response = axios.get(`${BASE_URL}/posts`, {headers}).catch((err) => err.response);

  return response;
}

export function findPostsById(id) {
  const response = axios.get(`${BASE_URL}/posts/user/${id}`, {headers}).catch((err) => err.response);

  return response;
}

export function insertLike(id) {
  const response = axios.post(`${BASE_URL}/posts/${id}/like`,'', {headers}).catch((err) => console.log(err))

  return response;
}

export function deleteLike(id) {
  const response = axios.delete(`${BASE_URL}/posts/${id}/deslike`, {headers}).catch((err) => console.log(err))

  return response;
}

export async function addPost(body) {

  try {
  const response = await axios.post(`${BASE_URL}/posts`, body, {headers})
  return response;
  } catch (error) {
    console.log(error);
  }
}

export async function removePost(postId) {

  
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}`, {headers})
    return response;
    
  } catch (error) {
    //console.log("entrou")
    console.log(error)
  }

}

export async function editPost(postId, body) {

  try {
    const response = await axios.put(`${BASE_URL}/posts/${postId}`, body, {headers})
    return response;
  } catch (error) {
    return error
  }
}