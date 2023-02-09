const isAuthenticated = require('./policies/isAuthenticated')
const PostController = require('./api/post/post.controller');

module.exports = (app) => {
  // Get post by id
  app.get('/apiv1/post/:id',
    PostController.getPost);

  // Get all user's posts

  // Create a post with auth
  
}