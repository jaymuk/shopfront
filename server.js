var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({'extended':'true'}));

app.get('/', function(request, response){
  response.render('index')
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;