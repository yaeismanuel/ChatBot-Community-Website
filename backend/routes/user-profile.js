const express = require('express');
const router = express.Router();
const { getUserInfo, getManagement } = require('../controllers/user-profile-controller');

router.get('/user', getUserInfo);
router.get('/managements', getManagement);

module.exports = router