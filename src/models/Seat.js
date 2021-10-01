const { Schema, model } = require("mongoose");

const seatSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  capacity: { type: Number, required: true },
});

module.exports = model("Seat", seatSchema);
