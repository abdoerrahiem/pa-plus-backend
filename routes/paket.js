const router = require('express').Router()
const {
  getAllPaket,
  getPaket,
  calculatePaket,
} = require('../controllers/paketController')

router.route('/').get(getAllPaket)
router.route('/calculate').post(calculatePaket)
router.route('/:id').get(getPaket)

module.exports = router
