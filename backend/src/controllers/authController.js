const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function doLogin(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (
    email === "amadeu@dfsi.pt" &&
    //bcrypt.compare(password, "sdadasdasd>sl<sd hjAKjAKJAnALAKLAKJlAKJJ")
    password === "123456"
  ) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: parseInt(process.env.JWT_EXPIRES),
    });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
}

const blacklist = [];

function doLogout(req, res, next) {
  const token = req.headers["authorization"];
  blacklist.push(token);

  res.sendStatus(200);
}

function isBlackListed(token) {
  return blacklist.some((t) => t === token);
}

module.exports = { doLogin, doLogout, isBlackListed };
