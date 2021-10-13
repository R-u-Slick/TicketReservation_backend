const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const Seat = require("../models/Seat");

const router = Router();

// Get a list of all cinemas
router.get("/seat", async (req, res) => {
  try {
    const seats = await Seat.find({});
    return res
      .status(200)
      .send(formatResponse(seats, null, "Cinemas list sent"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});

module.exports = router;
