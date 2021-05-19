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
  res.json(paket)
})

app.post('/paplus/api/quotes/calculate_premium', (req, res) => {
  const { plan } = req.body

  const response = {
    total_premium:
      plan === 'PAPF1'
        ? 1100000
        : plan === 'PAPF2'
        ? 1300000
        : plan === 'PAPF3'
        ? 1500000
        : plan === 'PAPI1'
        ? 300000
        : plan === 'PAPI2'
        ? 350000
        : 0,
    total_discount: 0,
    total_admin_fee: 0,
    total_stamp_duty: 0,
    total_payable:
      plan === 'PAPF1'
        ? 1100000
        : plan === 'PAPF2'
        ? 1300000
        : plan === 'PAPF3'
        ? 1500000
        : plan === 'PAPI1'
        ? 300000
        : plan === 'PAPI2'
        ? 350000
        : 0,
    total_donation: 0,
    discount_pct: 0,
    premium_details: [
      {
        amount:
          plan === 'PAPF1'
            ? 1100000
            : plan === 'PAPF2'
            ? 1300000
            : plan === 'PAPF3'
            ? 1500000
            : plan === 'PAPI1'
            ? 300000
            : plan === 'PAPI2'
            ? 350000
            : 0,
        amount_detail:
          plan === 'PAPF1'
            ? 1100000
            : plan === 'PAPF2'
            ? 1300000
            : plan === 'PAPF3'
            ? 1500000
            : plan === 'PAPI1'
            ? 300000
            : plan === 'PAPI2'
            ? 350000
            : 0,
        coverage_code: 'PA-P',
        coverage_detail: 'PA Plus',
        admin_fee: 0,
        stamp_duty: 0,
        rate:
          plan === 'PAPF1'
            ? 1100000
            : plan === 'PAPF2'
            ? 1300000
            : plan === 'PAPF3'
            ? 1500000
            : plan === 'PAPI1'
            ? 300000
            : plan === 'PAPI2'
            ? 350000
            : 0,
      },
    ],
  }

  res.json(response)
})

app.post('/paplus/api/quotes', (req, res) => {
  const { inception_date, plan } = req.body

  const response = {
    product_id: 'PA-P',
    sum_insured_1: 1,
    sum_insured_2: 0,
    sum_insured_3: 0,
    sum_insured_4: 0,
    sum_insured_5: 0,
    include_ext_cover_f: 0,
    inception_date,
    coverage_id: 'ECHAN-PAP',
    id: 21359,
    total_premium:
      plan === 'PAPF1'
        ? 1100000
        : plan === 'PAPF2'
        ? 1300000
        : plan === 'PAPF3'
        ? 1500000
        : plan === 'PAPI1'
        ? 300000
        : plan === 'PAPI2'
        ? 350000
        : 0,
    total_payable:
      plan === 'PAPF1'
        ? 1100000
        : plan === 'PAPF2'
        ? 1300000
        : plan === 'PAPF3'
        ? 1500000
        : plan === 'PAPI1'
        ? 300000
        : plan === 'PAPI2'
        ? 350000
        : 0,
    total_discount: 0,
    total_admin_fee: 0,
    total_stamp_duty: 0,
    donation: 0,
    dicount_pct: 0,
    expire_date: inception_date,
    charity_organization: null,
    paplus_detail: {
      occupation_id: '',
      sum_insured_level: '',
      gender: '',
      birth_date: inception_date,
      name: '',
      id_number: '',
      b_flag: false,
      c_flag: false,
      beneficiary_name: '',
      beneficiary_contact: '',
    },
    customer_detail: null,
    premium_details: [
      {
        amount:
          plan === 'PAPF1'
            ? 1100000
            : plan === 'PAPF2'
            ? 1300000
            : plan === 'PAPF3'
            ? 1500000
            : plan === 'PAPI1'
            ? 300000
            : plan === 'PAPI2'
            ? 350000
            : 0,
        amount_detail:
          plan === 'PAPF1'
            ? 1100000
            : plan === 'PAPF2'
            ? 1300000
            : plan === 'PAPF3'
            ? 1500000
            : plan === 'PAPI1'
            ? 300000
            : plan === 'PAPI2'
            ? 350000
            : 0,
        coverage_code: 'PA-P',
        coverage_detail: 'PA Plus',
        admin_fee: 0,
        stamp_duty: 0,
        rate:
          plan === 'PAPF1'
            ? 1100000
            : plan === 'PAPF2'
            ? 1300000
            : plan === 'PAPF3'
            ? 1500000
            : plan === 'PAPI1'
            ? 300000
            : plan === 'PAPI2'
            ? 350000
            : 0,
      },
    ],
  }

  res.json(response)
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
