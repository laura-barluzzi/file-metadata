var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path')

var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html')) 
})

app.post('/', upload.single('filesize'), function(req, res) {
    res.redirect('/get-file-size?filesize=' + req.file.size);
})

app.get('/get-file-size', function (req, res) {
    var result = {"filesize": req.query.filesize}
    res.send(JSON.stringify(result))
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})