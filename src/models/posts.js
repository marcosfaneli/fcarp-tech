const mongoose = require('../services/mongo');

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Posts = mongoose.model('posts', Schema);

const getAll = async () => {
  return await Posts.find().sort({ title: 1 });
}

const getOne = async (id) => {
  return await Posts.findById(id);
}

const create = async (post) => {
  if (!post.title || !post.body) {
    throw new Error('Title and body are required');
  }
  await Posts.create(post);
}

module.exports = {
  getAll,
  getOne,
  create,
}