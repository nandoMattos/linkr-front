import axios from "axios";
import { createHeaders } from "./authService";

const BASE_URL = process.env.REACT_APP_API;

const { headers } = createHeaders();

export function getPostsWithHashtag(hashtagName) {
  const response = axios.get(`${BASE_URL}/hashtags/${hashtagName}`, {headers}).catch((err) => console.log(err))

  return response;
}

export function getTrendingTopics() {
  const response = axios.get(`${BASE_URL}/hashtags/trendings`, {headers}).catch((err) => console.log(err))

  return response;
}