var express = require("express");
var router = express.Router();

/* GET option */

router.get("/", (req, res) => {
  res.render(req.body);
});

// ADD option

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
