const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
  name: { type: String, required: true },
  genreId: { type: Schema.Types.ObjectId, ref: "Genre" },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
});

module.exports = model("Film", filmSchema);
