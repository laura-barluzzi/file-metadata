var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path')
var FileSize = require('./sizes')

var fileSize = new FileSize()
var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html')) 
})

app.post('/', upload.single('filesize'), function(req, res) {
    fileSize.add(req.file.size);
    res.redirect('/get-file-size');
})

app.get('/get-file-size', function (req, res) {
    res.send(JSON.stringify(fileSize.get()))
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})