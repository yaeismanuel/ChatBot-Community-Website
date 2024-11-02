const userModel = require('../database/models/user');
const resObject = require('../configs/response');

const getUserInfo = async (req, res) => {
  try {
    const id = res.locals?.userId;
    const user = await userModel.findOne({ id });
    const userData = {
        id: user.id,
        name: user.name,
        img: user.img,
        username: user.username,
        role: user.role,
      }
    res.json(resObject(userData, true, 'User found.'));
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'User ID from token not found.'));
  }
}

const getManagement = async (req, res) => {
  try {
    const users = await userModel.find({});
    const usersData = users.map(user => ({
      id: user.id,
      name: user.name,
      img: user.img,
      username: user.username,
      role: user.role,
    }));
    const management = usersData.filter(u => (u.role == 'Admin' || u.role == 'Moderator') ? true : false);
    res.json(resObject(management, true));
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'There was an error getting all the users.'));
  }
}

module.exports = {
  getUserInfo,
  getManagement
}