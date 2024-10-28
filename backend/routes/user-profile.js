const express = require('express');
const router = express.Router();
const { getUserInfo } = require('../controllers/user-profile-controller');

router.get('/', getUserInfo);

module.exports = router