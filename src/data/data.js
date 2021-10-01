const mongoose = require("mongoose");

const belarusId = mongoose.Types.ObjectId();
const ukraineId = mongoose.Types.ObjectId();
const russiaId = mongoose.Types.ObjectId();
const minskId = mongoose.Types.ObjectId();
const kievId = mongoose.Types.ObjectId();
const moscowId = mongoose.Types.ObjectId();
const dramaId = mongoose.Types.ObjectId();
const actionId = mongoose.Types.ObjectId();
const comedyId = mongoose.Types.ObjectId();
const fantasyId = mongoose.Types.ObjectId();
const horrorId = mongoose.Types.ObjectId();
const mysteryId = mongoose.Types.ObjectId();
const thrillerId = mongoose.Types.ObjectId();
const pupkinId = mongoose.Types.ObjectId();
const grigorievId = mongoose.Types.ObjectId();
const vorobeyId = mongoose.Types.ObjectId();
const avroraHallOneId = mongoose.Types.ObjectId();
const regularSeatId = mongoose.Types.ObjectId();

const countriesData = [
  { _id: belarusId, name: "Belarus" },
  { _id: ukraineId, name: "Ukraine" },
  { _id: russiaId, name: "Russia" },
];

const citiesData = [
  { _id: minskId, name: "Minsk", countryId: belarusId },
  { _id: kievId, name: "Kiev", countryId: ukraineId },
  { _id: moscowId, name: "Moscow", countryId: russiaId },
];

const usersData = [
  {
    firstName: "client",
    lastName: "client",
    email: "client@gmail.com",
    password: "$2a$07$T4RNCaD95YJoH.m.uMszB.0oXd51totBfSpLHXt8jUWITvXrBPnxi",
    role: "client",
    city: minskId,
  },
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "$2a$07$T4RNCaD95YJoH.m.uMszB.0oXd51totBfSpLHXt8jUWITvXrBPnxi",
    role: "admin",
    city: minskId,
  },
];

const actorsData = [
  {
    _id: pupkinId,
    firstName: "Vasiliy",
    lastName: "Pupkin",
    countryId: belarusId,
  },
  {
    _id: grigorievId,
    firstName: "Grigory",
    lastName: "Grigoriev",
    countryId: ukraineId,
  },
  {
    _id: vorobeyId,
    firstName: "Andrey",
    lastName: "Vorobey",
    countryId: russiaId,
  },
];

const genresData = [
  { _id: dramaId, name: "Drama" },
  { _id: actionId, name: "Action" },
  { _id: comedyId, name: "Comedy" },
  { _id: fantasyId, name: "Fantasy" },
  { _id: horrorId, name: "Horror" },
  { _id: mysteryId, name: "Mystery" },
  { _id: thrillerId, name: "Thriller" },
];

const filmsData = [
  {
    name: "Jaws",
    genre: thrillerId,
    duration: 124,
    description:
      "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c11f66ec0451a36f5aae494b1509b069_bf869227-c34a-449c-83ff-ed093d341dd3_480x.progressive.jpg?v=1573616179",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
  {
    name: "Avengers: Infinity War",
    genre: actionId,
    duration: 149,
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_480x.progressive.jpg?v=1631200474",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
  {
    name: "Pulp fiction",
    genre: actionId,
    duration: 154,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/950e439404c3d5eddd86ae876cec83bf_949b5045-2503-4883-bcd2-ff1f31f5b14c_480x.progressive.jpg?v=1573588746",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
  {
    name: "Back to the future",
    genre: fantasyId,
    duration: 116,
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
  {
    name: "Jurassic Park",
    genre: actionId,
    duration: 127,
    description:
      "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_480x.progressive.jpg?v=1573651499",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
  {
    name: "No Time to Die",
    genre: actionId,
    duration: 163,
    description:
      "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/received_188443509130467_480x.progressive.jpg?v=1583518859",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
  {
    name: "Star wars: a new hope",
    genre: fantasyId,
    duration: 121,
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/23fd3ba334c1e8e84c96906497d577bf_6d652cf7-d705-42d2-96aa-2c3963f8a178_480x.progressive.jpg?v=1573613876",
    actors: [pupkinId, grigorievId, vorobeyId],
  },
];

const cinemasData = [
  {
    name: "Avrora",
    city: minskId,
    image:
      "https://abws.bycard.by/uploads/objects/thumbs/420x300/1nazyLljj.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum quis ipsum a consectetur. Suspendisse nec vehicula mauris, sit amet tristique augue. In purus nunc, accumsan ut ligula lobortis, rhoncus ullamcorper dolor. Nullam ultrices accumsan erat, nec posuere diam venenatis non. Sed fringilla eros id enim efficitur finibus. Proin nec tempor turpis, at vulputate quam. Praesent tincidunt orci vitae elementum facilisis. Mauris ex metus, iaculis eu fringilla eget, aliquet vel arcu. Nam finibus vehicula eleifend. Phasellus lobortis, dui a efficitur accumsan, odio elit commodo ex, non laoreet elit felis et metus. Vivamus in elit rhoncus, maximus tellus in, accumsan dolor. Phasellus vitae pretium elit, eget maximus nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus posuere mi non porta finibus.",
    halls: [avroraHallOneId],
  },
];

const hallsData = [
  {
    _id: avroraHallOneId,
    name: "Hall №1",
    plan: [
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
    ],
  },
];

const seatsData = [
  {
    _id: regularSeatId,
    name: "regular",
    color: "gray",
  },
];

exports.countriesData = countriesData;
exports.citiesData = citiesData;
exports.usersData = usersData;
exports.actorsData = actorsData;
exports.genresData = genresData;
exports.filmsData = filmsData;
