import { handleServerResponse } from "./api";
import { baseUrl } from "./constants";

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

function getCurrentUser(token) {
  // on headers pass in authorization header = "Bearer " + token stored on local storage
  // const token = localStorage.getItem("token");
  return fetch(`${baseUrl}users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return handleServerResponse(res);
  });
}

function updateProfile({ name, avatar }) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => handleServerResponse(res));
}

export default { signup, signin, getCurrentUser, updateProfile };
