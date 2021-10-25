const { Router } = require("express");
const City = require("../models/City");
const Country = require("../models/Country");
const User = require("../models/User");
const Actor = require("../models/Actor");
const Genre = require("../models/Genre");
const Film = require("../models/Film");
const Cinema = require("../models/Cinema");
const Hall = require("../models/Hall");
const Seat = require("../models/Seat");
const Session = require("../models/Session");
const Good = require("../models/Good");
const GoodPrice = require("../models/GoodPrice");
const SeatPrice = require("../models/SeatPrice");

const {
  countriesData,
  citiesData,
  usersData,
  actorsData,
  genresData,
  filmsData,
  cinemasData,
  hallsData,
  seatsData,
  sessionsData,
  goodsData,
  goodsPriceData,
  seatsPriceData,
} = require("../data/data");
const formatResponse = require("../helpers/serverResponse");

const router = Router();

router.get("/dbinit", async (req, res) => {
  const modelsArray = [City, Country, Actor, Genre];

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

  async function dbFill(info, modelName) {
    info.forEach(async (v) => {
      const newElement = new modelName(v);
      await newElement.save();
    });
  }

  try {
    if (await emptyCheck(modelsArray)) {
      dbFill(countriesData, Country);
      dbFill(citiesData, City);
      dbFill(usersData, User);
      dbFill(actorsData, Actor);
      dbFill(genresData, Genre);
      dbFill(filmsData, Film);
      dbFill(cinemasData, Cinema);
      dbFill(hallsData, Hall);
      dbFill(seatsData, Seat);
      dbFill(sessionsData, Session);
      dbFill(goodsData, Good);
      dbFill(goodsPriceData, GoodPrice);
      dbFill(seatsPriceData, SeatPrice);

      return res
        .status(201)
        .send(formatResponse(null, null, "DB successfully initialized"));
    }
    return res
      .status(403)
      .send(formatResponse(null, "DB already filled with data", null));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});

module.exports = router;
