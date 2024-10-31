// https://i.imgur.com/hcz65Qd.jpeg
// https://i.imgur.com/nK2ZdJM.jpeg
// 'Hello everyone! we are happy to inform you that this website is now the official website for our community.'

const testdata = {
  message: 'Id velit veniam ad qui laborum. Eiusmod nostrud do aliqua exercitation eu aute cillum id.',
  author: 'Juan Dela Cruz',
  authorImg: 'https://i.imgur.com/hcz65Qd.jpeg',
  role: 'Moderator',
  date: '10/30/2024',
  likes: 18,
  liked: []
}

const announceModel = require('../database/models/announcement');
const resObject = require('../configs/response');

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await announceModel.find({});
    res.json(resObject(announcements, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to fetch announcements.'));
    console.log(e);
  }
}

const addAnnounce = async (req, res) => {
  try {
    const announce = req.body;
    
    if (!announce.message || !announce.author || !announce.role) return res.json(resObject(null, false, 'Message, author, and role of announcement are mandatory.'));
    const create = await announceModel.create(announce);
    res.json(resObject(create, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to fetch announcements.'));
    console.log(e);
  }
}

const likeAnnounce = async (req, res) => {
  try {
    const filter = req.body;
    const { userId } = res.locals;
    
    if (!userId) return res.json(resObject({ 
        authError: true,
        message: 'Not logged in.'
      }, false));
    
    if (!filter._id) return res.json(resObject({ 
        message: 'Id of announcement is mandatory.'
      }, false));
    
    const announce = await announceModel.findOne(filter);
    
    if (announce.whoLiked.includes(userId)) {
      const update = await announceModel.findOneAndUpdate(filter, { 
        likes: announce.likes - 1,
        liked: false,
        whoLiked: announce.whoLiked.filter((a) => a !== userId)
      }, { new: true });
      res.json(resObject(update, true));
    } else {
      const update = await announceModel.findOneAndUpdate(filter, { 
        likes: announce.likes + 1,
        liked: true,
        whoLiked: [...announce.whoLiked, userId]
      }, { new: true });
      res.json(resObject(update, true));
    }
  } catch (e) {
    res.json(resObject({ error: e.message }, false, 'Failed to like/unlike announcement.'));
    console.log(e);
  }
}

module.exports = {
  getAnnouncements,
  addAnnounce,
  likeAnnounce,
}