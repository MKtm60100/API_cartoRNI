const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET ALL regions */

router.get("/", (req, result) => {
  client.query("SELECT * FROM ref_regions;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
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
