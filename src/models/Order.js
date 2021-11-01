const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    selectedSeats: [
      {
        seatPrice: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "SeatPrice",
        },
        coordinate: {
          row: { type: String, required: true },
          seat: { type: String, required: true },
        },
      },
    ],
    orderedGoods: [
      { type: Schema.Types.ObjectId, required: true, ref: "GoodPrice" },
    ],
    status: { type: Schema.Types.String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
