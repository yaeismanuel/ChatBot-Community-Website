const express = require('express');
const router = express.Router();
const { getWebsites, addWebsite } = require('../controllers/websites-page-controller');

router.get('/', getWebsites);
router.post('/add', addWebsite);

module.exports = router