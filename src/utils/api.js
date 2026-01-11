import { baseUrl } from "./constants";

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}items`).then(handleServerResponse);
}

function addItem({ name, imageUrl, weather }) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleServerResponse);
}

function deleteItem(id) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

function updateItem(id) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

function toggleItemLike(id, isLiked) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}items/${id}/likes`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

export {
  baseUrl,
  handleServerResponse,
  getItems,
  addItem,
  deleteItem,
  updateItem,
  toggleItemLike,
};
