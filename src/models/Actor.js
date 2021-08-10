const { Schema, model } = require('mongoose');

const actorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  countryId: { type: String, required: true },
});

module.exports = model('Actor', actorSchema);
