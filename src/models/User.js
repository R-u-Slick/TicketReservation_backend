const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please enter your first name"],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z]+$/.test(v);
        },
        message: "First name can only contain letters",
      },
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Please enter your last name"],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z]+$/.test(v);
        },
        message: "Last name can only contain letters",
      },
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please enter your email"],
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    role: { type: String, required: true },
    city: { type: String, required: [true, "Please enter your city"] },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
