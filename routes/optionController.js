const express = require("express");
const router = express.Router();
const client = require("../models/database");

/* GET all option */

router.get("/", (req, result) => {
  client.query("SELECT * FROM ref_options;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

// ADD option

router.post("/", (req, result) => {
  let body = req.body;
  console.log(req.body);
  client.query(
    "INSERT INTO ref_options(ID_option, lib_option) VALUES (" +
      body.ID_option +
      ", " +
      body.lib_option +
      ");",
    (err, res) => {
      if (!err) {
        console.log(result);
      } else {
        console.log(err.message);
      }
    }
  );
  client.end;
});

module.exports = router;
