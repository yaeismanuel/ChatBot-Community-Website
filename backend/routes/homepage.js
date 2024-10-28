const express = require('express');
const router = express.Router();
const { getAnnouncements } = require('../controllers/homepage-controller');

router.get('/', getAnnouncements);

module.exports = router