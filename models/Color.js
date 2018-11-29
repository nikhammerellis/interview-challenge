const mongoose = require("mongoose");
const { Schema } = mongoose;

const ColorSchema = new Schema({
  colorHex: String, //the hex code for the actual color
  colorCategory: String //Blue,Red,Green, etc
});

module.exports = mongoose.model("color", ColorSchema);
