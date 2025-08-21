const userSessionMap = new Map();

function setUser(id, user) {
  userSessionMap.set(id, user);
}

function getUser(id) {
  return userSessionMap.get(id);
}

module.exports = { setUser, getUser };
