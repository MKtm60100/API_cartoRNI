const express = require("express");
const router = express.Router();

/* GET ALL services */

router.get("/", (req, res) => {
  res.render(req.body);
});

// GET BY NAME service

router.get("/:name", (req, res) => {
  res.render(req.body);
});

// ADD services

router.post("/", (req, res) => {
  console.log(req.body);
});

// UPDATE service

router.put("/:id", (req, res) => {
  console.log(req.body);
});

module.exports = router;
