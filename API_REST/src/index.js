const express = require('express')

const app = express()

const { config } = require('./config')
const EntityApi = require('./routes/EntityApi')
const AccountApi = require('./routes/AccountApi')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', EntityApi)
app.use('/', AccountApi)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})