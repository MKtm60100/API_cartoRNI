const express = require('express')
const router = express.Router()

/* GET UNITE */

router.get('/', (req, res) => {
  res.render(req.body)
})

// GET BY NAME UNITE

router.get('/:name', (req, res) => {
  res.render(req.body)
})

// ADD UNITE

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router
