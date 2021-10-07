const { Router } = require("express");
const formatResponse = require("../helpers/serverResponse");
const Hall = require("../models/Hall");
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

// Update an existing hall
router.patch(
  "/hall",
  authMiddleware.allowAccess(["admin"]),
  async (req, res) => {
    try {
      const filter = req.body._id;
      const update = req.body;
      const doc = await Hall.findOneAndUpdate({ _id: filter }, update, {
        new: true,
        runValidators: true,
      });
      if (!doc) {
        return res
          .status(404)
          .send(
            formatResponse(null, `Hall with id ${filter} doesn't exist`, null)
          );
      }
      return res
        .status(200)
        .send(formatResponse(doc, null, "User successfully updated"));
    } catch (err) {
      return res.status(400).send(formatResponse(null, err, null));
    }
  }
);

module.exports = router;
