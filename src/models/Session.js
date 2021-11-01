const { Schema, model } = require("mongoose");

const sessionSchema = new Schema({
  cinema: { type: Schema.Types.ObjectId, required: true, ref: "Cinema" },
  film: { type: Schema.Types.ObjectId, required: true, ref: "Film" },
  date: { type: Date, requred: true },
  hall: { type: Schema.Types.ObjectId, required: true, ref: "Hall" },
  seatPrice: [
    { type: Schema.Types.ObjectId, required: true, ref: "SeatPrice" },
  ],
  goodPrice: [
    { type: Schema.Types.ObjectId, required: true, ref: "GoodPrice" },
  ],
  orders: [{ type: Schema.Types.ObjectId, required: true, ref: "Order" }],
});

module.exports = model("Session", sessionSchema);
