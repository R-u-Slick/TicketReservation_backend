const { Router } = require('express');
const { Mongoose } = require('mongoose');
const City = require('../models/City');
const Country = require('../models/Country');
const Actor = require('../models/Actor');
const Genre = require('../models/Genre');

const router = Router();

router.get('/dbinit', async (req, res) => {
  // Add countries
  const result = await Country.findOne({});
  if (!result) {
    const belarus = new Country({
      _id: new Mongoose.Types.ObjectId(),
      name: 'Belarus',
    });
    await belarus.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', belarus);
    });
    const ukraine = new Country({
      _id: new Mongoose.Types.ObjectId(),
      name: 'Ukraine',
    });
    await ukraine.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', ukraine);
    });
    const russia = new Country({
      _id: new Mongoose.Types.ObjectId(),
      name: 'Russia',
    });
    await russia.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', russia);
    });
  }

  // let result1 = await City.findOne({});
  // if (!result1) {
  //   const minsk = new City({
  //     name: 'Minsk',
  //     countryId: belarus._id,
  //   });
  //   minsk.save((err) => {
  //     if (err) return console.log(err);
  //     console.log('Сохраен объект', minsk);
  //   });
  //   const kiev = new City({
  //     name: Kiev,
  //     countryId: ukraine._id,
  //   });
  //   kiev.save((err) => {
  //     if (err) return console.log(err);
  //     console.log('Сохраен объект', kiev);
  //   });
  //   const moscow = new City({
  //     name: 'Moscow',
  //     countryId: russia._id,
  //   });
  //   moscow.save((err) => {
  //     if (err) return console.log(err);
  //     console.log('Сохраен объект', kiev);
  //   });
  // }

  // const minsk = new City({
  //   name: 'Minsk',
  //   countryId: 'belarus'
  // });
  // minsk.save((err) => {
  //   if (err) return console.log(err);
  //   console.log('Сохраен объект', minsk);
  // });

  // const Country = mongoose.model('Country', countrySchema);
  // let country;
  // collectionFill(Country, countries, country);

  // const Actor = mongoose.model('Actor', actorSchema);
  // let actor;
  // collectionFill(Actor, actors, actor);

  // const Genre = mongoose.model('Genre', genreSchema);
  // let genre;
  // collectionFill(Genre, genres, genre);
});

module.exports = router;

// eslint-disable-next-line eol-last
