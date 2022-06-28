const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const Tracker = require("../models/tracker");
const User = require("../models/user");

const HttpError = require("../models/http-error");

const getTrackerById = async (req, res, next) => {
  const trackerId = req.params.tid;
  let tracker;
  try {
    tracker = await Tracker.findById(trackerId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a tracker",
      500
    );
    return next(error);
  }

  if (!tracker) {
    const error = new HttpError(
      "Could not find a tracker for the provided id",
      404
    );
    return next(error);
  }
  res.json({ tracker: tracker.toObject({ getters: true }) });
};

const getTrackersByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let trackers;
  try {
    trackers = await Tracker.find({ creator: userId });
  } catch (err) {
    const error = new HttpError(
      "Fetching trackers failed, please try again later",
      500
    );
    return next(error);
  }

  if (!trackers || trackers.length === 0) {
    return next(
      new HttpError("Could not find trackers for the provided user id", 404)
    );
  }
  res.json({
    trackers: trackers.map((tracker) => tracker.toObject({ getters: true })),
  });
};

const createTracker = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data");
  }

  const { title, deposit, withdrawals, net, currentBalance, creator } =
    req.body;
  const createdTracker = new Tracker({
    title,
    deposit,
    withdrawals,
    net,
    currentBalance,
    history: [],
    creator,
  });

  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Creating tracker failed, please try again later",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided Id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdTracker.save({ session: sess });
    user.trackers.push(createdTracker);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating tracker failed, please try again",
      500
    );
    return next(error);
  }

  res.status(201).json({ tracker: createdTracker });
};

const updateTracker = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data");
  }

  const { title, deposit, withdrawals, currentBalance } = req.body;
  const trackerId = req.params.tid;

  let tracker;

  try {
    tracker = await Tracker.findById(trackerId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update tracker",
      500
    );
    return next(error);
  }

  tracker.title = title;
  tracker.deposit = deposit;
  tracker.withdrawals = withdrawals;
  tracker.currentBalance = currentBalance;

  try {
    await tracker.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update tracker",
      500
    );
    return next(error);
  }

  res.status(200).json({ tracker: tracker.toObject({ getters: true }) });
};

const deleteTracker = async (req, res, next) => {
  const trackerId = req.params.tid;

  let tracker;

  try {
    tracker = await Tracker.findById(trackerId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete tracker",
      500
    );
    return next(error);
  }

  if (!tracker) {
    const error = new HttpError("Could not find tracker for this Id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await tracker.remove({ session: sess });
    tracker.creator.trackers.pull(tracker);
    await tracker.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete tracker.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Tracker deleted" });
};

exports.getTrackerById = getTrackerById;
exports.getTrackersByUserId = getTrackersByUserId;
exports.createTracker = createTracker;
exports.updateTracker = updateTracker;
exports.deleteTracker = deleteTracker;
