const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const Film = require("../models/Film");

const router = Router();

// Get a list of all cities
router.get("/film", async (req, res) => {
  try {
    const films = await Film.find({})
      .populate({ path: "actors" })
      .populate({ path: "genre" });
    return res.status(200).send(formatResponse(films, null, "Films list sent"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});

module.exports = router;
