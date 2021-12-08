const express = require("express");
const router = express.Router();
const client = require("../models/database");
const { Planning } = require("../mocks/planning");
const convertToGeoJSON = (rows) => {
  var geoJSON = {
    type: "FeatureCollection",
    features: [],
  };
  rows.forEach((row) => {});
  {
    geoJSON.features.push({
      type: "feature",
      geometry: {
        type: "Point",
        coordinates: [rows.x, rows.y],
      },
      properties: {
        id_user: rows.id_user,
        code_unite: rows.code_unite,
        id_region: rows.id_region,
        date_debut: rows.date_debut,
        id_creneaux_debut: rows.id_creneaux_debut,
        date_fin: rows.date_fin,
        id_creneaux_fin: rows.id_creneaux_fin,
        adresse: rows.adresse,
        adresse_temp: rows.adresse_temp,
        x: rows.x,
        y: rows.y,
        id_pos_service: rows.id_pos_service,
        id_options: rows.id_options,
        dispo: rows.color,
        commentaire: rows.commentaire,
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

router.post("/commentaire", (req, result) => {
  let body = req.body;
  console.log(req.body);
  client.query(
    "INSERT INTO planning(commentaire) VALUES (" + body.commentaire + ");",
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
