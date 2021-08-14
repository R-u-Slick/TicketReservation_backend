const { Schema, model } = require("mongoose");

const actorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  countryId: { type: Schema.Types.ObjectId, ref: "Country" },
});

module.exports = model("Actor", actorSchema);
