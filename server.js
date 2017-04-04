var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path')

var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html')) // absolute path
})

app.post('/', function(req, res) {
    res.end()
})

app.get('/get-file-size', function (req, res) {
    res.send('file size is X')
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})