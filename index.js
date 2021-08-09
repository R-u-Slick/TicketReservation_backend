
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

app.get('/', (req, res) => {
  dbConnect(dbUrl);
})

app.get('/dbinit', (req, res) => {
  dbConnect(dbUrl);
  const City = mongoose.model("City", cityScheme);
  const Country = mongoose.model("Country", countryScheme);
  const Actor = mongoose.model("Actor", actorScheme);
  const Genre = mongoose.model("Genre", genreScheme);

  cities.forEach((v)=>{
    let city = new City (v);
    city.save(function(err){   
      if(err) return console.log(err);
      console.log("Сохранен объект", city);
    });
  });

  countries.forEach((v)=>{
    let country = new Country (v);
    country.save(function(err){   
      if(err) return console.log(err);
      console.log("Сохранен объект", country);
    });
  });

  actors.forEach((v)=>{
    let actor = new Actor (v);
    actor.save(function(err){   
      if(err) return console.log(err);
      console.log("Сохранен объект", actor);
    });
  });
  genres.forEach((v)=>{
    let genre = new Genre (v);
    genre.save(function(err){   
      if(err) return console.log(err);
      console.log("Сохранен объект", genre);
    });
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})