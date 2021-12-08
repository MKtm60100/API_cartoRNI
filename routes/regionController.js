const express = require("express");
const router = express.Router();

/* GET ALL regions */

router.get("/", (req, res) => {
  res.render(req.body);
});

// GET BY NAME region

router.get("/:name", (req, res) => {
  res.render(req.body);
});

// ADD regions

router.post("/", (req, res) => {
  console.log(req.body);
});

// UPDATE region

router.put("/:id", (req, res) => {
  console.log(req.body);
});

module.exports = router;
