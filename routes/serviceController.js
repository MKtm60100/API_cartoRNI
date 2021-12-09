const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET ALL services */

router.get("/", (req, result) => {
  client.query("SELECT * FROM ref_pos_service;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
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
