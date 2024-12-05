export function doLogin(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "amadeu@dfsi.pt" && password === "123456") {
      return resolve(true);
    }
    return reject("E-mail e/ou senha inválidos!");
  });
}

export function doLogout() {}
