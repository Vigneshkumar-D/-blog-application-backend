const commentService = require('../service/commentsService');

const getComments = (req, res) => {
  const postId = req.params.postId;
  console.log("postId", postId);
  commentService.getCommentsByPostId(postId, (err, comments) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    console.log(comments);

    res.json({ comments });
  });
};

const createComment = (req, res) => {
  const { postId, content, username } = req.body;
  console.log("postId", postId, content, username);
  commentService.createComment(postId, content, username, (err, newComment) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ comment: newComment });
  });
};

const updateComment = (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  commentService.updateComment(id, content, (err, success) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!success) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment updated successfully' });
  });
};

const deleteComment = (req, res) => {
  const { id } = req.params;
  commentService.deleteComment(id, (err, success) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!success) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment
};
