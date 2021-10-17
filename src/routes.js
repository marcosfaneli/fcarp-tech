const express = require('express');
const posts = require('./models/posts');
const comments = require('./models/comments');

const routes = express.Router();

routes.get('/', async (req, res) => {

  const result = await posts.getAll();

  res.render('posts', {
    posts: result,
  });
});

routes.get('/posts/create', (req, res) => {
  res.render('create');
});

routes.get('/posts/view/:id', async (req, res) => {
  const result = await posts.getOne(req.params.id);
  const commentsResult = await comments.getByPostId(req.params.id);

  res.render('view', {
    post: result,
    comments: commentsResult,
  });
});

routes.post('/posts', async (req, res) => {
  await posts.create({ ...req.body });
  res.redirect('/');
});

routes.post('/posts/:id/comments', async (req, res) => {
  await comments.create(req.params.id, req.body.body);
  res.redirect(`/posts/view/${req.params.id}`);
});

module.exports = routes;