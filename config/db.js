const mongoose = require("mongoose");
const express = require("express");
const dbinitRoute = require("../src/routes/dbinitRoute");

const app = express();

const DB_URL =
  "mongodb+srv://admin:admin@cluster0.jg02e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(dbinitRoute);

async function runDatabase() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("database connected");
  } catch (e) {
    console.log(e);
  }
}

exports.runDatabase = runDatabase;
