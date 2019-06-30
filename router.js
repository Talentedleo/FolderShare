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

router.get('/download-file/:filename', (req, res) => {
    const FILE_NAME = req.params.filename
    console.log(FILE_NAME)
    fs.readFile(config.SHARE_PATH + FILE_NAME, (err, data) => {
        if (err) {
            res.send('404 error')
        }
        res.header('Content-Disposition', `attachment;filename=${FILE_NAME}`)
        res.send(data)
    })
})

module.exports = router
