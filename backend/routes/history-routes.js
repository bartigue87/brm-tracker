const express = require("express");
const { check } = require("express-validator");

const historyControllers = require("../controllers/history-controllers");

const router = express.Router();

router.get("/:hid", historyControllers.getHistoryById);

router.get("/tracker/:tid", historyControllers.getHistoryByTrackerId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("amount").not().isEmpty(),
    check("date").not().isEmpty(),
  ],
  historyControllers.createHistory
);

router.patch(
  "/:hid",
  [
    check("title").not().isEmpty(),
    check("amount").not().isEmpty(),
    check("date").not().isEmpty(),
  ],
  historyControllers.updateHistory
);

router.delete("/:hid", historyControllers.deleteHistory);

module.exports = router;
