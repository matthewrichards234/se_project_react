// I did not end up using this file...

const TOKEN_KEY = "token"; // this is the same name as the token we used in App.jsx

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
