const { Schema, model } = require("mongoose");

const hallSchema = new Schema({
  name: { type: String, required: true },
  plan: [[{ type: Schema.Types.ObjectId, ref: "Seat" }]],
});

module.exports = model("Hall", hallSchema);
