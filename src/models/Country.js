const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: mongoose.Schema.Types.ObjectId, unique: true, required: true },
});

module.exports = mongoose.model('Country', countrySchema);
