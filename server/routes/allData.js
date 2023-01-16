const express = require("express");
const router = express.Router();
const data = require("../data/dummyData");

// const jsonData = JSON.stringify(data);

/* GET all data listing in non-json format. */
router.route("/").get(function (req, res, next) {
  res.status(200).json(data);
});

module.exports = router;
