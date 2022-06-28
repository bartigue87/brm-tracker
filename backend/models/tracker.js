const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trackerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
  withdrawals: {
    type: Number,
    required: true,
  },
  currentBalance: {
    type: Number,
    required: true,
  },
  net: {
    type: Number,
    required: true,
  },

  history: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "History",
    },
  ],
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Tracker", trackerSchema);
