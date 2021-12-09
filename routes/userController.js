const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET ALL users */

router.get("/", (req, result) => {
  client.query("SELECT * FROM users;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
// GET BY NAME user

router.get("/:name", (req, res) => {
  res.render(req.body);
});

// ADD users

router.post("/", (req, res) => {
  console.log(req.body);
});

// UPDATE user

router.put("/:id", (req, res) => {
  console.log(req.body);
});

module.exports = router;
