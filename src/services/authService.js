import api from "./config";

function postSignUp(body) {
  const promise = api.post(`/signup`, body);
  return promise;
}

function postSignIn(body) {
  const promise = api.post(`/signin`, body);
  return promise;
}

export { postSignUp, postSignIn };