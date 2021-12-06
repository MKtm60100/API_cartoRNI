const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;
const client = require("../models/database");
const { Planning } = require("../mocks/planning");

const convertToGeoJSON = (rows) => {
  var geoJSON = {
    type: "FeatureCollection",
    features: [],
  };
  for (var i = 0; i < rows.length; i++) {
    geoJSON.features.push({
      type: "feature",
      geometry: {
        type: "Point",
        coordinates: [rows[i].x, rows[i].y],
      },
      properties: {
        id_user: rows[i].id_user,
        code_unite: rows[i].code_unite,
        id_region: rows[i].id_region,
        date_debut: rows[i].date_debut,
        id_creneaux_debut: rows[i].id_creneaux_debut,
        date_fin: rows[i].date_fin,
        id_creneaux_fin: rows[i].id_creneaux_fin,
        adresse: rows[i].adresse,
        adresse_temp: rows[i].adresse_temp,
        x: rows[i].x,
        y: rows[i].y,
        id_pos_service: rows[i].id_pos_service,
        id_options: rows[i].id_options,
        commentaire: rows[i].commentaire,
      },
    });
  }
  return [geoJSON];
};

/* GET planning */

router.get("/", (req, result) => {
  client.query("select * from planning;", (err, res) => {
    if (!err) {
      console.log(res.rows);
      res.rows = convertToGeoJSON(res.rows);
      result.json(res.rows);
    } else {
      console.log(err.message);
    }
    client.end;
  });
});

// AddNoteToPlanning planning

router.post("/", (req, res) => {
  console.log(req.body);
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
