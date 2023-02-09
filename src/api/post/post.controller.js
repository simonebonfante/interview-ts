const { Post } = require('../models');

module.exports = {
  // Get post by id
  async getPost(req, res) {
    try {
      const postId = req.params.id;
      if (!postId || !parseInt(postId)) {
        return res.status(401).send('Invalid input parameters')
      }
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).send('Not found');
      }
      res.status(200).send(post);
    } catch(err) {
      res.status(500).send(`unexpected error::${err}`);
    }
  }

  // Get all user's posts

  // Create a post with auth

}