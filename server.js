require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const paket = require('./data/paket.json')
const calculate = require('./data/calculate.json')

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server running...')
})

// fs.readdirSync('./routes').map((route) => {
//   route = route.split('.')[0]

//   return app.use(`/api/v1/${route}`, require(`./routes/${route}`))
// })

app.get('/paplus/api/plan', (req, res) => {
  res.json({
    success: true,
    data: paket,
  })
})

app.post('/paplus/api/quotes/calculate_premium', (req, res) => {
  const { plan } = req.body

  const foundedCalculate = calculate.find((pk) => pk.id === plan)

  res.json({
    success: true,
    data: foundedCalculate,
  })
})

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(`Server berjalan pada port ${PORT}.`)
)

process.on('unhandledRejection', (err, promise) => {
  console.log(`Tidak dapat terhubung! Pesan error: ${err.message}.`)
  server.close(() => process.exit(1))
})
