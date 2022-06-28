const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const historySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  tracker: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Tracker",
  },
});

module.exports = mongoose.model("History", historySchema);
