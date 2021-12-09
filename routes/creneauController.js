const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET creneau */

router.get("/", (req, result) => {
  client.query("SELECT * FROM ref_creneaux;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// GET BY ID creneau

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  client.query(
    "SELECT * FROM ref_creneaux WHERE id = req.params.id;",
    (err, res) => {
      if (!err) {
        console.log(res.rows);
        result.json(res.rows);
      } else {
        console.log(err.message);
      }
    }
  );
  client.end;
});

// ADD creneau

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
