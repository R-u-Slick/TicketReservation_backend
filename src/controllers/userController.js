const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { key } = require("../../config/jwtKey");

exports.passwordHash = (password) => {
  const hashedPassword = bcrypt.hashSync(password, 7);
  return hashedPassword;
};

exports.validatePassword = (password, hash) => {
  const isValid = bcrypt.compareSync(password, hash);
  return isValid;
};

exports.generateAccessToken = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, key, { expiresIn: "1h" });
};
