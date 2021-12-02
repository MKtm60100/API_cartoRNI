var express = require("express");
var router = express.Router();

/* GET planning */

router.get("/", (req, res) => {
  res.render(req.body);
});

// ADD planning

router.post("/", (req, res) => {
  console.log(req.body);
});

// UPDATE planning

router.put("/:id", (req, res) => {
  console.log(req.body);
});

// DELETE planning

router.delete("/:id", (req, res) => {
  console.log(req.body);
});
module.exports = router;
