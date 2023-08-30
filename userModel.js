const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  size: Array,
  category: String,
});

module.exports = mongoose.model("userdatas", productSchema);
