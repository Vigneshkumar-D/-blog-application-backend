const { db, hashPassword, validatePassword } = require('../models/userModel');

const registerUser = (username, password, callback) => {
  const hashedPassword = hashPassword(password);
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.run(query, [username, hashedPassword], function (err) {
    callback(err, { id: this.lastID, username });
  });
};

const loginUser = (username, password, callback) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  db.get(query, [username], (err, user) => {
    if (err) return callback(err);
    if (!user || !validatePassword(password, user.password)) {
      return callback(null, null);
    }
    callback(null, user);
  });
};

const deleteUserById = (id, callback) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, this.changes);
    }
  });
};

const getAllUsers = (callback) => {
  const sql = 'SELECT id, username, email FROM users';
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = {
  registerUser,
  loginUser,
  deleteUserById,
  getAllUsers
};
