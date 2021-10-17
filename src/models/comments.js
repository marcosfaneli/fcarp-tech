const mongoose = require('../services/mongo');

const Schema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', Schema);

const getByPostId = async (postId) => {
  return await Comment.find({ postId });
}

const create = async (postId, body) => {
  const comment = {
    postId,
    body,
  };
  await Comment.create(comment);
}

module.exports = {
  getByPostId,
  create,
}
