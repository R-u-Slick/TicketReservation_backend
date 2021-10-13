const { Schema, model } = require("mongoose");

const cinemaSchema = new Schema({
  name: { type: String, required: true },
  city: { type: Schema.Types.ObjectId, ref: "City" },
  image: { type: String, requred: true },
  description: { type: String, required: true },
  halls: [{ type: Schema.Types.ObjectId, ref: "Hall" }],
});

module.exports = model("Cinema", cinemaSchema);
