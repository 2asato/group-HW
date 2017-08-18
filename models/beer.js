const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  varietal: String,
  brand: String.
  name: String,
  abv: Number
});

module.exports = mongoose.model("Beer", beerSchema);
