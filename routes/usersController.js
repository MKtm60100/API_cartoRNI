const express = require('express')
const router = express.Router()

/* GET ALL users */

router.get('/', (req, res) => {
  res.render(req.body)
})

// GET BY NAME user

router.get('/:name', (req, res) => {
  res.render(req.body)
})

// ADD users

router.post('/', (req, res) => {
  console.log(req.body)
})

// UPDATE user

router.put('/:id', (req, res) => {
  console.log(req.body)
})

module.exports = router
