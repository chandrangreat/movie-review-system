const UsersModel = require('./users.entity');

const getUsers = async () => {
  const users = await UsersModel.find({});
  return users;
};
const getRoleOfUser = async (userId) => {
  try {
    const user = await UsersModel.findById(userId);
    console.log(user);
    return user.role;
  } catch (err) {
    return err;
  }
};

module.exports = { getUsers, getRoleOfUser };
