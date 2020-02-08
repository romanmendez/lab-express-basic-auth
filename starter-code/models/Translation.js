const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    spanish: String,
    english: String,
    level: String,
    booklet: Number,
    length: Number
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("translation", Schema);
module.exports = model;
