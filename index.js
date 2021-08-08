
const express = require('express');
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const app = express();
const port = 3000;

//установка схем
const userSceme = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, required: true},
  createdAt: {type: Date, required: true},
  updatedAt: {type: Date, required: true},
  city: {type: String, required: true}
})

const cityScheme = new Schema ({
  name: {type: String, required: true},
  countryId: {type: String, required: true}
})

const countryScheme = new Schema ({
  name: {type: String, unique: true, required: true}
})

const actorScheme = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  countryId: {type: String, required: true}
})

const genreScheme = new Schema ({
  name: {type: String, required: true}
})


app.get('/', (req, res) => {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.jg02e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
})

app.get('/db-init', (req, res) => {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.jg02e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})