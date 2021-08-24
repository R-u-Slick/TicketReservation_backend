const { Router } = require("express");
const userController = require("../controllers/userController");
const formatResponse = require("../helpers/serverResponse");
const User = require("../models/User");

const router = Router();

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const userData = req.body;
    const { password } = userData;
    if (password.length >= 6) {
      userData.password = userController.passwordHash(password);
    }
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
});
// Get a list of all existing users
router.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send(formatResponse(users, null, "Users list sent"));
  } catch (err) {
    return res
      .status(400)
      .send(formatResponse(null, err, "Can't gat a user list"));
  }
});
// Delete an existing user
router.delete("/user", async (req, res) => {
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
});
// Update an existing user
router.patch("/user", async (req, res) => {
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
});
// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw {
        name: "Invalid email",
        message: `User with email ${email} doesn't exist`,
      };
    }
    const validPassword = userController.validatePassword(
      password,
      user.password
    );
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
});

module.exports = router;
