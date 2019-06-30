let express = require('express')
let router = require('./router')

let bodyParser = require('body-parser')

let app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/static/', express.static('./static/'))
app.engine('html', require('express-art-template'))

app.use(router)

app.listen(8888, () => {
    console.log('The server is running, address is localhost:8888')
})

module.exports = app
