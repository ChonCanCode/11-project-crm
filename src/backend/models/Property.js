const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  street: String,
  city: String,
  postcode: String,
  tenant: String,
  rent: Number,
  status: String,
});

module.exports = mongoose.model("Property", propertySchema);
