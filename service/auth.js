const userSessionMap = new Map();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.SECRET_KEY || null;
function setUser(user) {
  return jwt.sign({ _id: user._id, email: user.email }, secret);
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = { setUser, getUser };
