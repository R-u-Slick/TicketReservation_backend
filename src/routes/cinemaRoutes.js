const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const Cinema = require("../models/Cinema");
const authMiddleware = require("../middleware/authMiddleware");

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
//update a cinema
router.patch(
  "/cinema",
  authMiddleware.allowAccess(["admin"]),
  async (req, res) => {
    try {
      const filter = req.body._id;
      const update = req.body;
      const doc = await Cinema.findOneAndUpdate({ _id: filter }, update, {
        new: true,
        runValidators: true,
      });
      if (!doc) {
        return res
          .status(404)
          .send(
            formatResponse(null, `Cinema with id ${filter} doesn't exist`, null)
          );
      }
      return res
        .status(200)
        .send(formatResponse(doc, null, "Cinema successfully updated"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);
//delete a cinema
router.delete(
  "/cinema",
  authMiddleware.allowAccess(["admin"]),
  async (req, res) => {
    try {
      const { id: _id } = req.body;
      const cinema = await Cinema.deleteOne({ _id });
      if (cinema.deletedCount) {
        return res
          .status(200)
          .send(formatResponse(null, null, "Cinema successfully deleted"));
      }
      return res
        .status(404)
        .send(
          formatResponse(null, `Cinema with id ${_id} doesn't exist`, null)
        );
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);
//create a new cinema
router.post(
  "/cinema",
  authMiddleware.allowAccess(["admin"]),
  async (req, res) => {
    try {
      const cinemaData = req.body;
      const newCinema = new Cinema(cinemaData);
      await newCinema.save();
      return res
        .status(201)
        .send(formatResponse(newCinema._id, null, "Data saved to DB"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);

module.exports = router;
