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
  try {
    await posts.create({ ...req.body });
    res.redirect('/');
  } catch (e) {
    res.render('error', {
      error: e.message,
    });
  }
});

routes.post('/posts/:id/comments', async (req, res) => {
  try {
    await comments.create(req.params.id, req.body.body);
    res.redirect(`/posts/view/${req.params.id}`);
  } catch (e) {
    res.render('error', {
      error: e.message,
    });
  }
});

module.exports = routes;