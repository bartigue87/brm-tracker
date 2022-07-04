const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const History = require("../models/history");
const Tracker = require("../models/tracker");

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
  res.json({ history: history.toObject({ getters: true }) });
};

const getHistoryByTrackerId = async (req, res, next) => {
  const trackerId = req.params.tid;
  let histories;
  try {
    histories = await History.find({ trackerLink: trackerId });
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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data");
  }

  const { title, amount, trackerLink } = req.body;

  const currentYear = new Date().getFullYear();

  const currentMonth = new Date().getMonth() + 1;

  const currentDay = new Date().getDate();

  let date = [currentMonth, currentDay, currentYear].join("/");

  const createdHistory = new History({
    title,
    amount,
    date,
    trackerLink,
  });

  let specificTracker;

  try {
    specificTracker = await Tracker.findById(trackerLink);
  } catch (err) {
    const error = new HttpError(
      "Creating histry failed, please try again later",
      500
    );
    return next(error);
  }

  if (!specificTracker) {
    const error = new HttpError("Could not find tracker for provided Id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdHistory.save({ session: sess });
    specificTracker.history.push(createdHistory);
    await specificTracker.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating history failed, please try again",
      500
    );
    return next(error);
  }
  res.status(201).json({ history: createdHistory });
};

//Don't think I need update History

const deleteHistory = async (req, res, next) => {
  const historyId = req.params.hid;

  let history;

  try {
    history = await History.findById(historyId).populate("trackerLink");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete tracker",
      500
    );
    return next(error);
  }

  if (!history) {
    const error = new HttpError("Could not find tracker for this Id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await history.remove({ session: sess });
    history.trackerLink.history.pull(history);
    await history.trackerLink.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete history.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "History deleted" });
};

exports.getHistoryById = getHistoryById;
exports.getHistoryByTrackerId = getHistoryByTrackerId;
exports.createHistory = createHistory;
exports.deleteHistory = deleteHistory;
