import axios from "axios";
import { createHeaders } from "./authService";

const BASE_URL = process.env.REACT_APP_API;

const config = createHeaders();

export function getPostsWithHashtag(hashtagName) {
  const response = axios.get(`${BASE_URL}/hashtags/${hashtagName}`, config).catch((err) => console.log(err))

  return response;
}

export function getTrendingTopics() {
  const response = axios.get(`${BASE_URL}/hashtags/trendings`, config).catch((err) => console.log(err))

  return response;
}