const express = require('express');
const router = express.Router();
const { getWebsites } = require('../controllers/websites-page-controller');

router.get('/', getWebsites);

module.exports = router