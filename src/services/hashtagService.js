import api from "./config";

const BASE_URL = process.env.REACT_APP_API;

export function getPostsWithHashtag(hashtagName) {
  const response = api.get(`/hashtags/${hashtagName}`).catch((err) => console.log(err))

  return response;
}

export function getTrendingTopics() {
  const response = api.get(`/hashtags/trendings`).catch((err) => console.log(err))

  return response;
}