const mongoose = require("mongoose");

const belarusId = mongoose.Types.ObjectId();
const ukraineId = mongoose.Types.ObjectId();
const russiaId = mongoose.Types.ObjectId();

const countriesData = [
  { _id: belarusId, name: "Belarus" },
  { _id: ukraineId, name: "Ukraine" },
  { _id: russiaId, name: "Russia" },
];

const citiesData = [
  { name: "Minsk", countryId: belarusId },
  { name: "Kiev", countryId: ukraineId },
  { name: "Moscow", countryId: russiaId },
];

const actorsData = [
  { firstName: "Vasiliy", lastName: "Pupkin", countryId: belarusId },
  { firstName: "Grigory", lastName: "Grigoriev", countryId: ukraineId },
  { firstName: "Andrey", lastName: "Vorobey", countryId: russiaId },
];

const genresData = [
  { name: "drama" },
  { name: "action" },
  { name: "comedy" },
  { name: "fantasy" },
  { name: "horror" },
  { name: "mystery" },
  { name: "thriller" },
];

exports.countriesData = countriesData;
exports.citiesData = citiesData;
exports.actorsData = actorsData;
exports.genresData = genresData;
