const bcrypt = require("bcryptjs");
const formatResponse = require("../helpers/serverResponse");
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

exports.create = async function (req, res) {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    return res.status(201).send(formatResponse(null, null, "Data saved to DB"));
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .send(formatResponse(null, err, "User with this email already exists"));
    }
    return res.status(400).send(formatResponse(null, err.errors, err.message));
  }
};

exports.getList = async function (req, res) {
  try {
    const users = await User.find({});
    return res.status(200).send(formatResponse(users, null, "Users list sent"));
  } catch (err) {
    return res
      .status(400)
      .send(formatResponse(null, err, "Can't gat a user list"));
  }
};

exports.delete = async function (req, res) {
  try {
    const { email } = req.body;
    const user = await User.deleteOne({ email });
    if (user.deletedCount) {
      return res
        .status(200)
        .send(formatResponse(null, null, "User successfully deleted"));
    }
    throw {
      name: "Invalid email",
      message: `User with email ${email} doesn't exist`,
    };
  } catch (err) {
    return res
      .status(400)
      .send(formatResponse(null, err, "User deletion error"));
  }
};

exports.update = async function (req, res) {
  try {
    const filter = req.body.email;
    const update = req.body;
    const doc = await User.findOneAndUpdate({ email: filter }, update, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      throw {
        name: "Invalid email",
        message: `User with email ${filter} doesn't exist`,
      };
    }
    return res
      .status(200)
      .send(formatResponse(doc, null, "User successfully updated"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, "User patch error"));
  }
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw {
        name: "Invalid email",
        message: `User with email ${email} doesn't exist`,
      };
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw {
        name: "Invalid password",
        message: "Invalid password",
      };
    }
    return res.status(200).send(formatResponse(null, null, "Login successful"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, "Login error"));
  }
};
