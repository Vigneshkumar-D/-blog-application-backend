const db = require('../config/database');

const getCommentsByPostId = (postId, callback) => {
  const query = 'SELECT * FROM comments WHERE postId = ?';
  db.all(query, [postId], (err, rows) => {
    callback(err, rows);
  });
};

const createComment = (postId, content, username, callback) => {
  const query = 'INSERT INTO comments (postId, content, username) VALUES (?, ?, ?)';
  db.run(query, [postId, content, username], function (err) {
    callback(err, { id: this.lastID, postId, content, username });
  });
};

const updateComment = (id, content, callback) => {
  const query = 'UPDATE comments SET content = ? WHERE id = ?';
  db.run(query, [content, id], function (err) {
    callback(err, this.changes > 0);
  });
};

const deleteComment = (id, callback) => {
  const query = 'DELETE FROM comments WHERE id = ?';
  db.run(query, [id], function (err) {
    callback(err, this.changes > 0);
  });
};

module.exports = {
  getCommentsByPostId,
  createComment,
  updateComment,
  deleteComment
};
