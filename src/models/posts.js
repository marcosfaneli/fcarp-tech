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
  return await Posts.find();
}

const getOne = async (id) => {
  return await Posts.findById(id);
}

const create = async (post) => {
  await Posts.create(post);
}

module.exports = {
  getAll,
  getOne,
  create,
}