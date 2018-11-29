const mongoose = require("mongoose");
const { Schema } = mongoose;

const colorSchema = new Schema({
  colorHex: String, //the hex code for the actual color
  colorCategory: String //Blue,Red,Green, etc
});

mongoose.model("colors", colorSchema);
