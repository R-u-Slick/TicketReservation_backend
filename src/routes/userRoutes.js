const { Router } = require("express");
const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = Router();

router.use(express.json());
//new user registration
router.post(
  "/user_create",
  body("firstName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("First name can only contain letters"),
  body("lastName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Last name can only contain letters"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 chars long"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ msg: "form validation failed", err: errors.array() });
    }
    const userData = req.body;
    const newUser = new User(userData);
    const hashedPassword = bcrypt.hashSync(newUser.password, 7);
    newUser.password = hashedPassword;
    const currentDate = new Date();
    newUser.createdAt = currentDate;
    newUser.updatedAt = currentDate;
    newUser.save((err) => {
      if (err) {
        if (err.code === 11000) {
          return res
            .status(400)
            .json({ msg: "User with this email already exists ", err: err });
        }
        return res.status(400).json({ msg: "DB write error", err: err });
      }
      return res.status(201).json({ msg: "data saved to DB" });
    });
  }
);
//user login
router.post("/user_login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      msg: "User with this email doesn't exist",
      err: "invalid email",
    });
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res
      .status(400)
      .json({ msg: "Invalid password", err: "Invalid password" });
  }
  return res.status(200).json({ msg: "Login successful" });
});

module.exports = router;
