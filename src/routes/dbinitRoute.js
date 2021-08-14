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
    info.forEach((v) => {
      const newElement = new modelName(v);
      newElement.save((err) => {
        if (err) return console.log(err);
        console.log("object saved", newElement);
      });
    });
  }

  if (await emptyCheck(modelsArray)) {
    dbFill(countriesData, Country);
    dbFill(citiesData, City);
    dbFill(actorsData, Actor);
    dbFill(genresData, Genre);
  }
});

module.exports = router;
