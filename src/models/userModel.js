const db = require('../config/database');
const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const validatePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
  db,
  hashPassword,
  validatePassword,
};
