const apiModel = require('../database/models/api');
const userModel = require('../database/models/user');
const resObject = require('../configs/response');

const getApis = async (req, res) => {
  try {
    const apis = await apiModel.find({});
    res.json(resObject(apis, true));
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'Unable to load APIs.'));
  }
}

const addApi = async (req, res) => {
  try {
    const newApi = req.body;
    const { userId } = res.locals;
    
    if (!newApi.name || !newApi.owner || !newApi.link) return res.json(resObject(null, false, 'Name, owner, and link of API are mandatory.'));
    
    const user = await userModel.findOne({ id: userId });
    
    if (user.role == 'Moderator' || user.role == 'Admin') {
      const api = await apiModel.create(newApi);
      res.json(resObject(api, true, 'API added successfully.'));
    } else {
      res.json(resObject({ authError: true }, false, 'You are not authorized to do this action.'));
    }
    
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'User ID from token not found.'));
  }
}

module.exports = {
  getApis,
  addApi
}