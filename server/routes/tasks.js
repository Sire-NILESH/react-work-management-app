const express = require("express");
const router = express.Router();
const { allData } = require("../data/dummyData");

// const jsonData = JSON.stringify(allData);

/* GET tasks listing. */
router.route("/").get(function (req, res, next) {
  res.status(200).json(allData);
});

module.exports = router;
