'use strict'

const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
  let meal = ['Sneekers', 'Bakwan Malang', 'Mie Ayam', 'Martabak Tanggo', 'Crab']
  res.json({
    meal: meal
  })
})

module.exports = router
