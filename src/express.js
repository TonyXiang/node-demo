var express = require('express')
var path = require('path')
var app = express()

var bodyParser = require('body-parser')

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/express.html'))
})

app.post('/webhook', urlencodedParser, function(req, res) {
  var response = req.body
  console.log(req.body)
  res.end(JSON.stringify(response))
})

var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
