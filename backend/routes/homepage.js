const express = require('express');
const router = express.Router();
const {
  getAnnouncements,
  addAnnounce,
  likeAnnounce,
} = require('../controllers/homepage-controller');

router.get('/', getAnnouncements);
router.get('/add', addAnnounce);
router.post('/like', likeAnnounce);

module.exports = router