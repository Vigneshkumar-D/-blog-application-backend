const db = require('../config/database');

const getAllPosts = (callback) => {
    const query = `
      SELECT posts.*, json_group_array(
        json_object(
          'id', comments.id,
          'content', comments.content,
          'username', comments.username,
          'createdAt', comments.createdAt
        )
      ) AS comments
      FROM posts
      LEFT JOIN comments ON posts.id = comments.postId
      GROUP BY posts.id
    `;
    db.all(query, [], (err, rows) => {
      callback(err, rows);
    });
  };

  const getPostById = (id, callback) => {
    const query = `
      SELECT posts.*, json_group_array(
        json_object(
          'id', comments.id,
          'content', comments.content,
          'username', comments.username,
          'createdAt', comments.createdAt
        )
      ) AS comments
      FROM posts
      LEFT JOIN comments ON posts.id = comments.postId
      WHERE posts.id = ?
      GROUP BY posts.id
    `;
    db.get(query, [id], (err, row) => {
      callback(err, row);
    });
  };

const createPost = (title, content, username, callback) => {
  const query = 'INSERT INTO posts (title, content, username) VALUES (?, ?, ?)';
  db.run(query, [title, content, username], function (err) {
    callback(err, { id: this.lastID, title, content, username });
  });
};

const updatePost = (id, title, content, callback) => {
  const query = 'UPDATE posts SET title = ?, content = ? username = ? WHERE id = ?';
  db.run(query, [title, content, username, id], function (err) {
    callback(err, this.changes);
  });
};

const deletePost = (id, callback) => {
  const query = 'DELETE FROM posts WHERE id = ?';
  db.run(query, [id], function (err) {
    callback(err, this.changes);
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
