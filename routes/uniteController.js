var express = require("express");
var router = express.Router();

/* GET UNITE */

router.get("/", (req, res) => {
  res.render(req.body);
});

// GET BY NAME UNITE

router.get("/:name", (req, res) => {
  res.render(req.body);
});

// ADD UNITE

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
