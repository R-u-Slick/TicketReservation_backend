const { Schema, model } = require("mongoose");

const seatPriceSchema = new Schema({
  seat: { type: Schema.Types.ObjectId, required: true, ref: "Seat" },
  includedGoods: [{ type: Schema.Types.ObjectId, required: true, ref: "Good" }],
  price: { type: Number, required: true },
});

module.exports = model("SeatPrice", seatPriceSchema);
