const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const Session = require("../models/Session");
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

// Get a list of all sessions
router.get("/session", async (req, res) => {
  try {
    const sessions = await Session.find({})
      .populate({
        path: "cinema",
        model: "Cinema",
        populate: {
          path: "city",
          model: "City",
        },
      })
      .populate({ path: "film", model: "Film" })
      .populate({
        path: "hall",
        model: "Hall",
        populate: { path: "plan", model: "Seat" },
      })
      .populate({
        path: "seatPrice",
        model: "SeatPrice",
        populate: [
          {
            path: "includedGoods",
            model: "Good",
          },
          {
            path: "seat",
            model: "Seat",
          },
        ],
      })
      .populate({
        path: "goodPrice",
        model: "GoodPrice",
        populate: {
          path: "good",
          model: "Good",
        },
      })
      .populate({
        path: "orders",
        model: "Order",
      });
    return res
      .status(200)
      .send(formatResponse(sessions, null, "Cinemas list sent"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err, null));
  }
});

router.patch(
  "/session",
  authMiddleware.allowAccess(["client"]),
  async (req, res) => {
    try {
      const filter = req.body._id;
      const update = req.body;
      const doc = await Session.findOneAndUpdate({ _id: filter }, update, {
        new: true,
        runValidators: true,
      });
      if (!doc) {
        return res
          .status(404)
          .send(
            formatResponse(
              null,
              `Session with id ${filter} doesn't exist`,
              null
            )
          );
      }
      return res
        .status(200)
        .send(formatResponse(doc, null, "Session successfully updated"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);

module.exports = router;
