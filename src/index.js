const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

require('./passport')
let routes = require('./routes')

app.use('/', routes);

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
