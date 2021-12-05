const express = require('express')
const router = express.Router()

/* GET creneau */

router.get('/', (req, res) => {
  res.render(req.body)
})

// GET BY NAME creneau

router.get('/:name', (req, res) => {
  res.render(req.body)
})

// ADD creneau

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router
