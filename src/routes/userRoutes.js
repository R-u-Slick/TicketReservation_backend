const { Router } = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const formatResponse = require("../helpers/serverResponse");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { key } = require("../../config/jwtKey");

const router = Router();

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const userData = req.body;
    const { password } = userData;
    if (password.length < 6) {
      return res
        .status(400)
        .send(
          formatResponse(
            null,
            {
              password: {
                message: "Password must be at least 6 characters long",
              },
            },
            null
          )
        );
    }
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
        .send(
          formatResponse(
            null,
            { email: { message: "Email must be unique" } },
            null
          )
        );
    }
    return res.status(400).send(formatResponse(null, err.errors, null));
  }
});
// Get a list of all existing users
router.get("/user", authMiddleware.allowAccess(["admin"]), async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send(formatResponse(users, null, "Users list sent"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});
// Delete an existing user
router.delete(
  "/user",
  authMiddleware.allowAccess(["admin"]),
  async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.deleteOne({ email });
      if (user.deletedCount) {
        return res
          .status(200)
          .send(formatResponse(null, null, "User successfully deleted"));
      }
      return res
        .status(404)
        .send(
          formatResponse(null, `User with email ${email} doesn't exist`, null)
        );
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);
// Update an existing user
router.patch(
  "/user",
  authMiddleware.allowAccess(["admin"]),
  async (req, res) => {
    try {
      const filter = req.body.email;
      const update = req.body;
      const doc = await User.findOneAndUpdate({ email: filter }, update, {
        new: true,
        runValidators: true,
      });
      if (!doc) {
        return res
          .status(404)
          .send(
            formatResponse(
              null,
              `User with email ${filter} doesn't exist`,
              null
            )
          );
      }
      return res
        .status(200)
        .send(formatResponse(doc, null, "User successfully updated"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);
// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send(
          formatResponse(null, `User with email ${email} doesn't exist`, null)
        );
    }
    const validPassword = userController.validatePassword(
      password,
      user.password
    );
    if (!validPassword) {
      return res
        .status(400)
        .send(formatResponse(null, "Invalid password", null));
    }
    const token =
      "Bearer " + userController.generateAccessToken(user._id, user.role);
    return res
      .status(200)
      .send(formatResponse({ token, user }, null, "Login successful"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});
//request user data
router.get(
  "/users/me",
  authMiddleware.allowAccess(["admin", "client"]),
  async (req, res) => {
    try {
      const currentUser = req.user;
      return res
        .status(200)
        .send(formatResponse(currentUser, null, "User data sent"));
    } catch (err) {
      return res.status(400).status(formatResponse(null, err, null));
    }
  }
);

module.exports = router;
