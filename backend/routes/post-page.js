const express = require('express');
const router = express.Router();
const { getPosts, addPost, addPostComment, likePost } = require('../controllers/post-page-controller');

router.get('/', getPosts);
router.post('/add', addPost);
router.post('/addcomment', addPostComment);
router.post('/likepost', likePost);

module.exports = router