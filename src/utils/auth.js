import { baseUrl, handleServerResponse } from "./api";

function signup({ email, password, name, avatar }) {
  // BaseURL + register
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  });
}

function signin({ email, password }) {
  // Base URL + login
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}
