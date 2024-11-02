const websiteModel = require('../database/models/website');
const resObject = require('../configs/response');

const getWebsites = async (req, res) => {
  try {
    const websites = await websiteModel.find({});
    res.json(resObject(websites, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to fetch websites.'));
    console.log(e);
  }
}

const addWebsite = async (req, res) => {
  try {
    const web = req.body;
    const { userId } = res.locals;
    
    if (!userId) return res.json(resObject({ 
        authError: true,
        message: 'Not logged in.'
      }, false));
    
    if (!web.name || !web.thumbnail || !web.link || !web.developer || !web.devFb) return res.json(resObject(null, false, 'Name, thumbnail, link, developer, and devFb of the website are mandatory.'));
    
    const websites = await websiteModel.create(web);
    res.json(resObject({ name: websites.name }, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to add website.'));
    console.log(e);
  }
}

module.exports = {
  getWebsites,
  addWebsite
}