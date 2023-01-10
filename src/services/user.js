import api from "./config";

export function findUsersByName(name) {
  const response = api.get(`/users?name=${name}`).catch((err) => err.response);

  return response;
}


export function verifyFollow(idFollower, idFollowed) {
  const body = {
    id_user_follower: idFollower,
    id_user_followed: idFollowed
  }

  const response = api.post(`/users/verifyFollow`, body).catch((err) => err.response);

  return response;
}

export function followUser(idFollower, idFollowed) {
  const body = {
    id_user_follower: idFollower,
    id_user_followed: idFollowed
  }

  const response = api.post(`/users/follow`, body).catch((err) => err.response);

  return response;
}