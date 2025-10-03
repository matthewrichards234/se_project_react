import { baseUrl, handleServerResponse } from "./api";

function signup({ email, password, name, avatar }) {
  // BaseURL + register
  return fetch(`${baseUrl}signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return handleServerResponse(res);
  });
}

function signin({ email, password }) {
  // Base URL + login
  return fetch(`${baseUrl}signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return handleServerResponse(res);
  });
}

export default { signup, signin };
