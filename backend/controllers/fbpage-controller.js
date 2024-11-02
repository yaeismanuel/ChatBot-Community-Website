const fbpageModel = require('../database/models/fbpage');
const userModel = require('../database/models/user');
const resObject = require('../configs/response');

const getFbpages = async (req, res) => {
  try {
    const fbpages = await fbpageModel.find({});
    res.json(resObject(fbpages, true));
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'Unable to load Fb bot pages.'));
  }
}

const addFbpage = async (req, res) => {
  try {
    const id = res.locals?.userId;
    const newFbpage = req.body;
    
    const user = await userModel.findOne({ id });
    
    if (!newFbpage.name || !newFbpage.owner || !newFbpage.link) return res.json(resObject(null, false, 'Name, owner, and link of Fb bot page are mandatory.'));
    
    if (user.role == 'Moderator' || user.role == 'Admin') {
      const fbpage = await fbpageModel.create(newFbpage);
      res.json(resObject(fbpage, true, 'API added successfully.'));
    } else {
      res.json(resObject({ authError: true }, false, 'You are not authorized to do this action.'));
    }
    
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, 'User ID from token not found.'));
  }
}

module.exports = {
  getFbpages,
  addFbpage
}