const paket = require('../data/paket.json')
const calculate = require('../data/calculate.json')

exports.getAllPaket = async (req, res) => {
  res.json({
    success: true,
    data: paket,
  })
}

exports.getPaket = async (req, res) => {
  const foundedPaket = paket.find(
    (pk) => pk.id.toString() === req.params.id.toString()
  )

  if (!foundedPaket)
    return res.status(404).json({
      success: false,
      message: 'Paket tidak ditemukan',
    })

  res.json({
    success: true,
    data: foundedPaket,
  })
}

exports.calculatePaket = async (req, res) => {
  const { plan } = req.body

  res.json({
    success: true,
    data: calculate,
  })
}
