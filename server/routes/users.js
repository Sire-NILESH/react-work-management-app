const express = require("express");
const router = express.Router();
const { users } = require("../data/dummyData");

// const jsonData = JSON.stringify(users);

/* GET users listing. */
router.route("/").get(function (req, res, next) {
  res.status(200).json(users);
});
module.exports = router;
