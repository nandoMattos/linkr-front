import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

const config = {
  headers:{
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0LCJpYXQiOjE2NzI5NjU3MjF9.AaK2RkY1YPlyujs6WgrGAxYY3GymmePIqkCh3zY7a9w"
  } 
}

export function getPostsWithHashtag(hashtagName) {
  const response = axios.get(`${BASE_URL}/hashtags/${hashtagName}`, config).catch((err) => console.log(err))

  return response;
}

export function getTrendingTopics() {
  const response = axios.get(`${BASE_URL}/hashtags/trendings`, config).catch((err) => console.log(err))

  return response;
}