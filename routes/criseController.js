const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET ALL crises */

router.get("/", (req, result) => {
  client.query("SELECT * FROM histo_crise;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// GET BY NAME crise

router.get("/:name", (req, res) => {
  res.render(req.body);
});

// ADD crises

router.post("/", (req, result) => {
  let body = req.body;
  console.log(body);
  client.query(
    "INSERT INTO histo_crise(x, y) VALUES (" + body.x + ", " + body.y + ");",
    (err, res) => {
      if (!err) {
        console.log(res);
      } else {
        console.log(err.message);
      }
    }
  );
  client.end;
});

// UPDATE crise

router.put("/:id", (req, res) => {
  console.log(req.body);
});

module.exports = router;
