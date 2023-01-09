import api from "./config";

export function findUsersByName(name) {
  const response = api.get(`/users?name=${name}`).catch((err) => err.response);

  return response;
}
