const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET all UNITE */

router.get("/", (req, result) => {
  client.query("SELECT * FROM ref_unite;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
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
