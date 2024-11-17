const express = require('express');
const router = express.Router();
const { getPosts, addPost, addPostComment } = require('../controllers/post-page-controller');

router.get('/', getPosts);
router.post('/add', addPost);
router.post('/addcomment', addPostComment);

module.exports = router