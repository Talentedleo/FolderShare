const express = require('express')
const router = express.Router()
const fs = require('fs')
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
    console.log('Client: ' + req.ip)
    let fileName = req.params.filename
    console.log(fileName)
    fs.readFile(config.SHARE_PATH + fileName, (err, data) => {
        if (err) {
            res.send('404 error')
        }
        res.header('Content-Disposition', `attachment;filename=${fileName}`)
        res.send(data)
    })
})

router.post('/upload-file', (req, res) => {
    let uploadFile = req.files.myFile
    fs.writeFile(config.SHARE_PATH + uploadFile.name, uploadFile.data, (err) => {
        if (err) {
            res.send('upload error')
        }
        res.redirect('/')
    })
})

module.exports = router
