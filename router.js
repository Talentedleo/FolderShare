let express = require('express')
let router = express.Router()
let fs = require('fs')
const config = require('./config')

router.get('/', (req, res) => {
    console.log('Client: ' + req.ip)
    fs.readdir(config.SHARE_PATH, (err, files) => {
        if (err) {
            res.send('404 error')
        }
        res.render('index.html', {
            files : files
        })
    })
})

module.exports = router
