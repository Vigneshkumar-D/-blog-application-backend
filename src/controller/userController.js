const db = require('../config/database');
const userService = require('../service/userService');
const jwt = require('jsonwebtoken');
const secretKey = 'QWERTYUIOP12345678!@#$%^&*asdfghjzxcvbnm)(*&^%';


const register = (req, res) => {
  const { username, password } = req.body;
  userService.registerUser(username, password, (err, user) => {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        return res.status(400).json({ error: 'Username already exists' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'User registered successfully', user });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  userService.loginUser(username, password, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '1h',
      });
  
      res.status(200).json({
        message: 'Login successful',
        token: token,
      });
  });
};

const deleteUserById = (req, res) => {
  const userId = req.params.id;

  const sql = 'DELETE FROM users WHERE id = ?';
  db.run(sql, userId, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  });
};

const getAllUsers = (req, res) => {
  const sql = 'SELECT id, username FROM users'; 
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};


module.exports = {
  register,
  login,
  secretKey,
  deleteUserById,
  getAllUsers
};

