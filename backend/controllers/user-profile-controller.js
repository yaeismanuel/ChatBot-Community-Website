const userModel = require('../database/models/user');
const resObject = require('../configs/response');

const getUserInfo = async (req, res) => {
  try {
    const id = res.locals?.userId;
    const user = await userModel.findOne({ id });
    const userData = {
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role,
      }
    res.json(resObject(userData, true, 'User found.'));
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'User ID from token not found.'));
  }
}

module.exports = {
  getUserInfo,
}