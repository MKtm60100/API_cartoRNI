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

/* 
  result.json([
    {
      ID_user: 1,
      Code_unite: 6664,
      ID_region: 12,
      Annee_mois: 202101,
      Date_debut: new Date(),
      ID_creneaux_debut: 1,
      Type_adresse: "9 rue de Cambodge",
      Adresse_temp: "13 rue de Paris",
      X: 1.12837485,
      Y: 2.34564322,
      ID_pos_service: 1,
      ID_option: 1,
      Commentaire: "Test",
    },
    {
      ID_user: 2,
      Code_unite: 12984,
      ID_region: 3,
      Annee_mois: 202102,
      Date_debut: new Date(),
      ID_creneaux_debut: 2,
      Type_adresse: "9 rue de Stains",
      Adresse_temp: "13 rue de Lyon",
      X: 1.3478953,
      Y: 19.3657489,
      ID_pos_service: 2,
      ID_option: 2,
      Commentaire: "Test 2",
    },
  ]);
});
*/

// GET planning by ID_region
router.get("/", (req, result) => {
  client.query(
    "select * from planning where ID_region = 54864;",
    (err, res) => {
      if (!err) {
        console.log(res.rows);
        res.rows = convertToGeoJSON(res.rows);
        result.json(res.rows);
      } else {
        console.log(err.message);
      }
      client.end;
    }
  );
});

// AddNoteToPlanning planning

router.post("/commentaire", (req, result) => {
  let body = req.body;
  console.log(req.body);
  client.query(
    "INSERT INTO planning(commentaire) VALUES (" + body.commentaire + ");",
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
