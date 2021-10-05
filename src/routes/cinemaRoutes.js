const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const Cinema = require("../models/Cinema");

const router = Router();

// Get a list of all cinemas
router.get("/cinema", async (req, res) => {
  try {
    const cinemas = await Cinema.find({})
      .populate({
        path: "halls",
        model: "Hall",
        populate: {
          path: "plan",
          model: "Seat",
        },
      })
      .populate({ path: "city" });
    return res
      .status(200)
      .send(formatResponse(cinemas, null, "Cinemas list sent"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});

module.exports = router;
