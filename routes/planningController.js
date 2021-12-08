var express = require("express");
var router = express.Router();

/* GET planning */

router.get("/", (req, res) => {
  res.json([{
    "ID_user": 1,
    "Code_unite": 6664,
    "ID_region": 12,
    "Annee_mois": 202101,
    "Date_debut": new Date(),
    "ID_creneaux_debut": 1,
    "Type_adresse": "9 rue de Cambodge",
    "Adresse_temp": "13 rue de Paris",
    "X": 1.12837485,
    "Y": 2.34564322,
    "ID_pos_service": 1,
    "ID_option": 1,
    "Commentaire": "Test"
  },
  {
    "ID_user": 2,
    "Code_unite": 12984,
    "ID_region": 3,
    "Annee_mois": 202102,
    "Date_debut": new Date(),
    "ID_creneaux_debut": 2,
    "Type_adresse": "9 rue de Stains",
    "Adresse_temp": "13 rue de Lyon",
    "X": 1.3478953,
    "Y": 19.3657489,
    "ID_pos_service": 2,
    "ID_option": 2,
    "Commentaire": "Test 2"
  }])
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
