const { Router } = require('express');
const City = require('../models/City');
const Country = require('../models/Country');
const Actor = require('../models/Actor');
const Genre = require('../models/Genre');

const router = Router();

router.get('/dbinit', async (req, res) => {
  const modelsArray = [City, Country, Actor, Genre];

  // db emptiness check
  async function emptyCheck(models) {
    let isEmpty = true;
    for (let i = 0; i < models.length; i++) {
      const result = await models[i].findOne({});
      if (result) {
        isEmpty = false;
        return isEmpty;
      }
    }
    return isEmpty;
  }

  if (await emptyCheck(modelsArray)) {
    // Countries
    const belarus = new Country({
      name: 'Belarus',
    });
    const ukraine = new Country({
      name: 'Ukraine',
    });
    const russia = new Country({
      name: 'Russia',
    });
    // Cities
    const minsk = new City({
      name: 'Minsk',
      countryId: belarus._id,
    });
    const kiev = new City({
      name: 'Kiev',
      countryId: ukraine._id,
    });
    const moscow = new City({
      name: 'Moscow',
      countryId: russia._id,
    });
    // Actors
    const pupkin = new Actor({
      firstName: 'Vasiliy',
      lastName: 'Pupkin',
      countryId: belarus._id,
    });
    const grigoriev = new Actor({
      firstName: 'Grigory',
      lastName: 'Grigoriev',
      countryId: ukraine._id,
    });
    const vorobey = new Actor({
      firstName: 'Andrey',
      lastName: 'Vorobey',
      countryId: russia._id,
    });
    // Genres
    const drama = new Genre({
      name: 'Drama',
    });
    const action = new Genre({
      name: 'Action',
    });
    const comedy = new Genre({
      name: 'Comedy',
    });
    const fantasy = new Genre({
      name: 'Fantasy',
    });
    const horror = new Genre({
      name: 'Horror',
    });
    const mystery = new Genre({
      name: 'Mystery',
    });
    const thriller = new Genre({
      name: 'Thriller',
    });
    const western = new Genre({
      name: 'Western',
    });
    // Adding data to db
    belarus.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', belarus);
      minsk.save((err) => {
        if (err) return console.log(err);
        console.log('Object saved', minsk);
      });
      pupkin.save((err) => {
        if (err) return console.log(err);
        console.log('Object saved', pupkin);
      });
    });
    ukraine.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', ukraine);
      kiev.save((err) => {
        if (err) return console.log(err);
        console.log('Object saved', kiev);
      });
      grigoriev.save((err) => {
        if (err) return console.log(err);
        console.log('Object saved', grigoriev);
      });
    });
    russia.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', russia);
      moscow.save((err) => {
        if (err) return console.log(err);
        console.log('Object saved', moscow);
      });
      vorobey.save((err) => {
        if (err) return console.log(err);
        console.log('Object saved', vorobey);
      });
    });
    drama.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', drama);
    });
    action.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', action);
    });
    comedy.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', comedy);
    });
    fantasy.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', fantasy);
    });
    horror.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', horror);
    });
    mystery.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', mystery);
    });
    thriller.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', thriller);
    });
    western.save((err) => {
      if (err) return console.log(err);
      console.log('Object saved', western);
    });
  }
});

module.exports = router;
