const postModel = require('../database/models/post');
const userModel = require('../database/models/user');
const resObject = require('../configs/response');


const getCurrentDate = () => {
  return (new Date()).toLocaleDateString();
}

const getPosts = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const post = await postModel.findOne({ _id: id }).populate('author');
      res.json(resObject(post, true));
      return;
    }
    const posts = await postModel.find({}).sort({ createdAt: -1 }).populate('author').populate('comments.author');
    res.json(resObject(posts, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to fetch posts.'));
    console.log(e);
  }
}

const addPost = async (req, res) => {
  try {
    const post = req.body;
    const { userId } = res.locals;
    
    if (!post.message) return res.json(resObject(null, false, 'Message of post is mandatory.'));
    
    const user = await userModel.findOne({ id: userId });
    
    if (!user) return res.json(resObject({ authError: true }, false, 'You are not authorized to do this action.'));
    
    post.author = user._id;
    post.date = getCurrentDate();
    
    const create = await postModel.create(post);
    res.json(resObject(create, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to add post.'));
    console.log(e);
  }
}

const addPostComment = async (req, res) => {
  try {
    const data = req.body;
    const { userId } = res.locals;
    
    if (!data.postId || !data.message) return res.json(resObject(null, false, 'Message and postId of post is mandatory.'));
    
    const user = await userModel.findOne({ id: userId });
    
    if (!user) return res.json(resObject({ authError: true }, false, 'You are not authorized to do this action.'));
    
    data.author = user._id;
    data.date = getCurrentDate();
    
    const post = await postModel.findOne({ _id: data.postId });
    const addComment = await postModel.findOneAndUpdate({ _id: data.postId }, { comments: [ ...post.comments, data ] }, { new: true }).populate('author').populate('comments.author');
    
    res.json(resObject(addComment, true));
  } catch (e) {
    res.json(resObject(null, false, 'Failed to add post.'));
    console.log(e);
  }
}

module.exports = {
  getPosts,
  addPost,
  addPostComment
}