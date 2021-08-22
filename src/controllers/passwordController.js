const bcrypt = require("bcryptjs");
const formatResponse = require("../../config/serverResponse");
const User = require("../models/User");

exports.passwordHash = function (req, res, next) {
  try {
    const { password } = req.body;
    if (password.length >= 6) {
      req.body.password = bcrypt.hashSync(password, 7);
    }
    next();
  } catch (err) {
    return res
      .status(400)
      .send(formatResponse(null, err, "Password hashing error"));
  }
};
