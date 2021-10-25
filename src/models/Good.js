const { Schema, model } = require("mongoose");

const goodSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = model("Good", goodSchema);
