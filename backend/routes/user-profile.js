const express = require('express');
const router = express.Router();
const { getUserInfo, getUsers, getManagement, updateProfile } = require('../controllers/user-profile-controller');

router.get('/user', getUserInfo);
router.get('/users', getUsers);
router.get('/managements', getManagement);
router.post('/user/update', updateProfile);

module.exports = router