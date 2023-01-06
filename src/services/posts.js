import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

// just change token afterwards
const config = {
  headers:{
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0LCJpYXQiOjE2NzI5NjU3MjF9.AaK2RkY1YPlyujs6WgrGAxYY3GymmePIqkCh3zY7a9w"
  } 
}

export function findAllPosts() {
  const response = axios.get(`${BASE_URL}/posts`).catch((err) => err.response);

  return response;
}

export function findPostsById(id) {
  const response = axios.get(`${BASE_URL}/posts/user/${id}`).catch((err) => err.response);

  return response;
}

export function insertLike(id) {
  const response = axios.post(`${BASE_URL}/posts/${id}/like`).catch((err) => console.log(err))

  return response;
}

export function deleteLike(id) {
  const response = axios.delete(`${BASE_URL}/posts/${id}/deslike`).catch((err) => console.log(err))

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