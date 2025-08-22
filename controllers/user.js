const User = require("../models/user");
const { setUser } = require("../service/auth");
async function userSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/login");
}
async function userLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user)
    return res.render("login", {
      error: "Invalid Email or Password. Please Try Again",
    });
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}
async function userLogout(req, res) {
  res.clearCookie("uid", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  return res.redirect("/login");
}

module.exports = { userSignup, userLogin, userLogout };
