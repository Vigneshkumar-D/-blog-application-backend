const postService = require('../service/postService');

const getAllPosts = (req, res) => {
  postService.getAllPosts((err, posts) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ posts });
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  postService.getPostById(id, (err, post) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ post });
  });
};

const createPost = (req, res) => {
  const { title, content, username } = req.body;
  console.log(username);

  postService.createPost(title, content, username, (err, post) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ post });
  });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, username } = req.body;
  postService.updatePost(id, title, content, username, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post updated successfully' });
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  postService.deletePost(id, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
