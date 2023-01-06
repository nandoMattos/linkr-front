import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${auth}`
    }
  }

  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

export { postSignUp, postSignIn, createHeaders };