require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

app.use(express.json())

app.use(cors())

fs.readdirSync('./routes').map((route) => {
  route = route.split('.')[0]

  return app.use(`/api/v1/${route}`, require(`./routes/${route}`))
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
