const { Router } = require("express");
const City = require("../models/City");
const Country = require("../models/Country");
const Actor = require("../models/Actor");
const Genre = require("../models/Genre");
const {
  countriesData,
  citiesData,
  actorsData,
  genresData,
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
      dbFill(actorsData, Actor);
      dbFill(genresData, Genre);
      return res
        .status(201)
        .send(formatResponse(null, null, "DB successfully initialized"));
    }
    throw {
      name: "DB already filled with data",
      message: "DB already filled with data",
    };
  } catch (err) {
    return res
      .status(400)
      .send(formatResponse(null, err, "DB initialization error"));
  }
});

module.exports = router;
