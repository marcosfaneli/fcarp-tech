module.exports = {
  db: process.env.MONGO_URL || 'mongodb://localhost/post',
  port: process.env.PORT || 5000,
};