const usersDAO = require('./model/users.dao');

let checkUser = async (userName) => {
  const users = await usersDAO.getUsers();
  const newUsersArray = users.filter((user) => user.userName === userName);
  if (newUsersArray.length === 1) {
    return {
      isAuthenticated: true,
      user: newUsersArray[0],
    };
  }
  return {
    isAuthenticated: false,
  };
};

let checkIfUserIsAdmin = async (userId) => {
  try {
    const role = await usersDAO.getRoleOfUser(userId);
    if (role === 'admin') {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

module.exports = { checkUser, checkIfUserIsAdmin };
