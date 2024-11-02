const express = require('express');
const router = express.Router();
const { getApis, addApi } = require('../controllers/api-page-controller');

router.get('/', getApis);
router.post('/add', addApi);

module.exports = router