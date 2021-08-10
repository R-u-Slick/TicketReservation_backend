const express = require('express');
const mongoose = require('mongoose');
const dbinitRoute = require('./src/routes/dbinitRoute');

const app = express();
const port = 3000;
const dbUrl = 'mongodb+srv://admin:admin@cluster0.jg02e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(dbinitRoute);

async function start() {
  try {
    await mongoose.connect(
      dbUrl,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      },
    );
    app.listen(port, () => {
      console.log('Server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
}

start();
