const express = require('express')
const fileUpload = require('express-fileupload')
const router = require('./router')
const bodyParser = require('body-parser')

const app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/static/', express.static('./static/'))
app.engine('html', require('express-art-template'))

app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(8888, () => {
    console.log('The server is running, address is localhost:8888')
})

module.exports = app
