const express = require('express');
const router = express.Router();
const { getFbpages, addFbpage } = require('../controllers/fbpage-controller');

router.get('/', getFbpages);
router.post('/add', addFbpage);

module.exports = router