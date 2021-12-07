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
        coordinates: [row.x, row.y],
      },
      properties: {
        id_user: row.id_user,
        code_unite: row.code_unite,
        id_region: row.id_region,
        date_debut: row.date_debut,
        id_creneaux_debut: row.id_creneaux_debut,
        date_fin: row.date_fin,
        id_creneaux_fin: row.id_creneaux_fin,
        adresse: row.adresse,
        adresse_temp: row.adresse_temp,
        x: row.x,
        y: row.y,
        id_pos_service: row.id_pos_service,
        id_options: row.id_options,
        dispo: row.color,
        commentaire: row.commentaire,
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
