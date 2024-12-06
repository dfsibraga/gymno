import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function doLogin(email, password) {
  /*return new Promise((resolve, reject) => {
    if (email === "amadeu@dfsi.pt" && password === "123456") {
      return resolve(true);
    }
    return reject("E-mail e/ou senha inválidos!");
  });*/
  const loginUrl = `${API_URL}/login`;
  const response = await axios.post(loginUrl, { email, password });
  return response.data;
}

export async function doLogout(token) {
  const logoutUrl = `${API_URL}/logout`;
  const headers = { authorization: token };
  const response = await axios.post(logoutUrl, {}, { headers });
  return response.data;
}
