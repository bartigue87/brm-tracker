const express = require("express");
const { check } = require("express-validator");

const trackersControllers = require("../controllers/trackers-controllers");

const router = express.Router();

router.get("/:tid", trackersControllers.getTrackerById);

router.get("/user/:uid", trackersControllers.getTrackersByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("deposit").not().isEmpty(),
    check("withdrawals").not().isEmpty(),
    check("currentBalance").not().isEmpty(),
  ],
  trackersControllers.createTracker
);

router.patch(
  "/:tid",
  [
    check("title").not().isEmpty(),
    check("deposit").not().isEmpty(),
    check("withdrawals").not().isEmpty(),
    check("currentBalance").not().isEmpty(),
  ],
  trackersControllers.updateTracker
);

router.delete("/:tid", trackersControllers.deleteTracker);

module.exports = router;
