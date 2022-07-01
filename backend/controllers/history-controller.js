const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const Histry = require("../models/history");

const HttpError = require("../models/http-error");

const getHistoryById = async (req, res, next) => {
  const historyId = req.params.hid;
  let history;
  try {
    history = await History.findById(historyId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find history",
      500
    );
    return next(error);
  }

  if (!history) {
    const error = new HttpError(
      "Could not find history for the provided id",
      404
    );
    return next(error);
  }
  res.json({ history: history.tracker.toObject({ getters: true }) });
};

const getHistoryByTrackerId = async (req, res, next) => {
  const trackerId = req.params.tid;
  let histories;
  try {
    histories = await History.find({ tracker: trackerId });
  } catch (err) {
    const error = new HttpError(
      "Fetching history failed, please try again later",
      500
    );
    return next(error);
  }

  if (!histories || histories.length === 0) {
    return next(
      new HttpError("Could not find history for the provided tracker Id", 404)
    );
  }
  res.json({
    history: histories.map((history) => history.toObject({ getters: true })),
  });
};

const createHistory = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        throw new HttpError("Invalid inputs passed, please check your data")
    }

    const { title, amount, tracker } = req.body
    
    let date = 
}
