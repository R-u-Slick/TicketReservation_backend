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
const avroraHallTwoId = mongoose.Types.ObjectId();
const kievHallOneId = mongoose.Types.ObjectId();
const kievHallTwoId = mongoose.Types.ObjectId();
const moscowHallOneId = mongoose.Types.ObjectId();
const moscowHallTwoId = mongoose.Types.ObjectId();
const regularSeatId = mongoose.Types.ObjectId();
const loveSeatId = mongoose.Types.ObjectId();
const avroraId = mongoose.Types.ObjectId();
const kievCinemaId = mongoose.Types.ObjectId();
const moscowCinemaId = mongoose.Types.ObjectId();
const jawsId = mongoose.Types.ObjectId();
const avengersId = mongoose.Types.ObjectId();
const pulpFictionId = mongoose.Types.ObjectId();
const backToFutureId = mongoose.Types.ObjectId();
const jurassicParkId = mongoose.Types.ObjectId();
const noTimeToDieId = mongoose.Types.ObjectId();
const starWarsId = mongoose.Types.ObjectId();
const popcornId = mongoose.Types.ObjectId();
const colaId = mongoose.Types.ObjectId();
const chipsId = mongoose.Types.ObjectId();
const avroraSessionSeatPrice = mongoose.Types.ObjectId();
const kievSessionRegularSeatPrice = mongoose.Types.ObjectId();
const kievSessionLoveSeatPrice = mongoose.Types.ObjectId();
const moscowSessionRegularSeatPrice = mongoose.Types.ObjectId();
const moscowSessionLoveSeatPrice = mongoose.Types.ObjectId();
const avroraPopcornPrice = mongoose.Types.ObjectId();
const avroraColaPrice = mongoose.Types.ObjectId();
const avroraChipsPrice = mongoose.Types.ObjectId();
const kievPopcornPrice = mongoose.Types.ObjectId();
const kievColaPrice = mongoose.Types.ObjectId();
const kievChipsPrice = mongoose.Types.ObjectId();
const moscowPopcornPrice = mongoose.Types.ObjectId();
const moscowColaPrice = mongoose.Types.ObjectId();
const moscowChipsPrice = mongoose.Types.ObjectId();

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
    _id: jawsId,
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
    _id: avengersId,
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
    _id: pulpFictionId,
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
    _id: backToFutureId,
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
    _id: jurassicParkId,
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
    _id: noTimeToDieId,
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
    _id: starWarsId,
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
    _id: avroraId,
    name: "Avrora",
    city: minskId,
    image:
      "https://abws.bycard.by/uploads/objects/thumbs/420x300/1nazyLljj.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum quis ipsum a consectetur. Suspendisse nec vehicula mauris, sit amet tristique augue. In purus nunc, accumsan ut ligula lobortis, rhoncus ullamcorper dolor. Nullam ultrices accumsan erat, nec posuere diam venenatis non. Sed fringilla eros id enim efficitur finibus. ",
    halls: [avroraHallOneId, avroraHallTwoId],
  },
  {
    _id: kievCinemaId,
    name: "Kiev",
    city: kievId,
    image:
      "https://abws.bycard.by/uploads/objects/thumbs/420x300/1Z55wwgRY.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum quis ipsum a consectetur. Suspendisse nec vehicula mauris, sit amet tristique augue. In purus nunc, accumsan ut ligula lobortis, rhoncus ullamcorper dolor. Nullam ultrices accumsan erat, nec posuere diam venenatis non. Sed fringilla eros id enim efficitur finibus. ",
    halls: [kievHallOneId, kievHallTwoId],
  },
  {
    _id: moscowCinemaId,
    name: "Moscow",
    city: moscowId,
    image:
      "https://abws.bycard.by/uploads/objects/thumbs/420x300/3Crfzl0WR.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum quis ipsum a consectetur. Suspendisse nec vehicula mauris, sit amet tristique augue. In purus nunc, accumsan ut ligula lobortis, rhoncus ullamcorper dolor. Nullam ultrices accumsan erat, nec posuere diam venenatis non. Sed fringilla eros id enim efficitur finibus. ",
    halls: [moscowHallOneId, moscowHallTwoId],
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
  {
    _id: avroraHallTwoId,
    name: "Hall №2",
    plan: [
      [
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
      ],
      [
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
      ],
      [
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
        regularSeatId,
      ],
      [loveSeatId, loveSeatId, loveSeatId],
    ],
  },
  {
    _id: kievHallOneId,
    name: "Hall №1",
    plan: [
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [loveSeatId, loveSeatId],
    ],
  },
  {
    _id: kievHallTwoId,
    name: "Hall №2",
    plan: [
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
    ],
  },
  {
    _id: moscowHallOneId,
    name: "Hall №1",
    plan: [
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [loveSeatId, loveSeatId],
    ],
  },
  {
    _id: moscowHallTwoId,
    name: "Hall №2",
    plan: [
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [regularSeatId, regularSeatId, regularSeatId, regularSeatId],
      [loveSeatId, loveSeatId],
      [loveSeatId, loveSeatId],
    ],
  },
];

const seatsData = [
  {
    _id: regularSeatId,
    name: "Regular seat",
    color: "#C4C4C4",
    capacity: "1",
  },
  {
    _id: loveSeatId,
    name: "Love seat",
    color: "#E10050",
    capacity: "2",
  },
];

const goodsData = [
  {
    _id: popcornId,
    name: "popcorn",
  },
  {
    _id: colaId,
    name: "cola",
  },
  {
    _id: chipsId,
    name: "chips",
  },
];

const goodsPriceData = [
  {
    _id: avroraPopcornPrice,
    good: popcornId,
    price: 2,
  },
  {
    _id: avroraColaPrice,
    good: colaId,
    price: 2.5,
  },
  {
    _id: avroraChipsPrice,
    good: chipsId,
    price: 3,
  },
  {
    _id: kievPopcornPrice,
    good: popcornId,
    price: 2,
  },
  {
    _id: kievColaPrice,
    good: colaId,
    price: 2.5,
  },
  {
    _id: kievChipsPrice,
    good: chipsId,
    price: 3,
  },
  {
    _id: moscowPopcornPrice,
    good: popcornId,
    price: 2,
  },
  {
    _id: moscowColaPrice,
    good: colaId,
    price: 2.5,
  },
  {
    _id: moscowChipsPrice,
    good: chipsId,
    price: 3,
  },
];

const seatsPriceData = [
  {
    _id: avroraSessionSeatPrice,
    seat: regularSeatId,
    includedGoods: [],
    price: 5,
  },
  {
    _id: kievSessionRegularSeatPrice,
    seat: regularSeatId,
    includedGoods: [],
    price: 5,
  },
  {
    _id: kievSessionLoveSeatPrice,
    seat: loveSeatId,
    includedGoods: [popcornId, colaId],
    price: 10,
  },
  {
    _id: moscowSessionRegularSeatPrice,
    seat: regularSeatId,
    includedGoods: [],
    price: 8,
  },
  {
    _id: moscowSessionLoveSeatPrice,
    seat: loveSeatId,
    includedGoods: [popcornId],
    price: 20,
  },
];

const sessionsData = [
  {
    cinema: avroraId,
    film: starWarsId,
    date: new Date("December 17, 2021 12:00:00"),
    hall: avroraHallOneId,
    seatPrice: [avroraSessionSeatPrice],
    goodPrice: [avroraPopcornPrice, avroraColaPrice, avroraChipsPrice],
  },
  {
    cinema: kievCinemaId,
    film: jurassicParkId,
    date: new Date("December 20, 2021 13:30:00"),
    hall: kievHallOneId,
    seatPrice: [kievSessionRegularSeatPrice, kievSessionLoveSeatPrice],
    goodPrice: [kievPopcornPrice, kievColaPrice, kievChipsPrice],
  },
  {
    cinema: moscowCinemaId,
    film: pulpFictionId,
    date: new Date("December 25, 2021 20:00:00"),
    hall: moscowHallOneId,
    seatPrice: [moscowSessionRegularSeatPrice, moscowSessionLoveSeatPrice],
    goodPrice: [moscowPopcornPrice, moscowColaPrice, moscowChipsPrice],
  },
];

exports.countriesData = countriesData;
exports.citiesData = citiesData;
exports.usersData = usersData;
exports.actorsData = actorsData;
exports.genresData = genresData;
exports.filmsData = filmsData;
exports.cinemasData = cinemasData;
exports.hallsData = hallsData;
exports.seatsData = seatsData;
exports.sessionsData = sessionsData;
exports.goodsData = goodsData;
exports.goodsPriceData = goodsPriceData;
exports.seatsPriceData = seatsPriceData;
