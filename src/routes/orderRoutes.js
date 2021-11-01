const { Router } = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const formatResponse = require("../helpers/serverResponse");
const Order = require("../models/Order");

const router = Router();

// Create a new order
router.post("/order", async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);
    const response = await newOrder.save();
    return res
      .status(201)
      .send(formatResponse(response, null, "Data saved to DB"));
  } catch (err) {
    return res.status(400).send(formatResponse(null, err.errors, null));
  }
});

// Get a orders.list
router.get(
  "/order",
  authMiddleware.allowAccess(["client"]),
  async (req, res) => {
    try {
      const users = await Order.find({})
        .populate({
          path: "selectedSeats",
          populate: {
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
          },
        })
        .populate({
          path: "orderedGoods",
          model: "GoodPrice",
          populate: {
            path: "good",
            model: "Good",
          },
        });
      return res.status(200).send(formatResponse(users, null, "Order sent"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);

router.patch(
  "/order",
  authMiddleware.allowAccess(["client"]),
  async (req, res) => {
    try {
      const filter = req.body._id;
      const update = req.body;
      const doc = await Order.findOneAndUpdate({ _id: filter }, update, {
        new: true,
        runValidators: true,
      });
      if (!doc) {
        return res
          .status(404)
          .send(
            formatResponse(null, `Order with id ${filter} doesn't exist`, null)
          );
      }
      return res
        .status(200)
        .send(formatResponse(doc, null, "Order successfully updated"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);

module.exports = router;
