const { Schema, model } = require("mongoose");

const goodPriceSchema = new Schema({
  good: { type: Schema.Types.ObjectId, required: true, ref: "Good" },
  price: { type: Number, required: true },
});

module.exports = model("GoodPrice", goodPriceSchema);
