
const express = require('express');
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const app = express();
const port = 3000;
const dbUrl = 'mongodb+srv://admin:admin@cluster0.jg02e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const cities = require('./data/cities.json');
const countries = require('./data/countries.json');
const actors = require('./data/actors.json');
const genres = require('./data/countries.json');

const citySchema = new Schema ({
  name: {type: String, required: true},
  countryId: {type: String, required: true}
})

const countrySchema = new Schema ({
  name: {type: String, unique: true, required: true}
})

const actorSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  countryId: {type: String, required: true}
})

const genreSchema = new Schema ({
  name: {type: String, required: true}
})

const dbConnect = (url) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connection.on('error',(err)=>
  {
    console.error("Database Connection Error: " + err);
    process.exit(2);
  });
  mongoose.connection.on('connected',()=>
 {
    console.info("Succesfully connected to MongoDB Database");
 });
};

function collectionFill(model, data, element) {
  model.findOne({}, function (err, docs){
    if (err) return console.log(err);
    if (!docs) {
      data.forEach((v)=>{
        element = new model(v);
        element.save(function(err){
          if (err) return console.log(err);
          console.log("Сохраен объект", v)
        })
      });
    }
  })
} 

app.get('/', (req, res) => {
  dbConnect(dbUrl);
})

app.get('/dbinit', (req, res) => {
  dbConnect(dbUrl);
  const City = mongoose.model("City", citySchema);
  let city;
  collectionFill(City, cities, city);

  const Country = mongoose.model("Country", countrySchema);
  let country;
  collectionFill(Country, countries, country);

  const Actor = mongoose.model("Actor", actorSchema);
  let actor;
  collectionFill(Actor, actors, actor);

  const Genre = mongoose.model("Genre", genreSchema);
  let genre;
  collectionFill(Genre, genres, genre);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})