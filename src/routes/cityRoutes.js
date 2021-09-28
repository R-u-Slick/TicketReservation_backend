const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const City = require("../models/City");

const router = Router();

// Get a list of all cities
router.get("/city", async (req, res) => {
  try {
    const cities = await City.find({});
    return res
      .status(200)
      .send(formatResponse(cities, null, "Cities list sent"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});

module.exports = router;
