const mongoose = require('mongoose');
const express = require('express');
const dbinitRoute = require('../src/routes/dbinitRoute');

const app = express();

const PORT = 3000;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.jg02e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(dbinitRoute);

async function runDatabase() {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      },
    );
    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
}

exports.PORT = PORT;
exports.DB_URL = DB_URL;
exports.runDatabase = runDatabase;
