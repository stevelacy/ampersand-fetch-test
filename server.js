var express = require('express');
var http = require('http');
var join = require('path').join;

var app = express();
var PORT = 3000;

app.use(express["static"](join(__dirname, 'static')));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  return res.send(500, 'Something broke!');
});

var idxFile = join(__dirname, 'static/index.html');
/*
app.get('/v1/items', function(req, res){
  return res.status(404).sendFile(idxFile);
});
*/
app.get('/v1/items', function(req, res){
  return res.status(200).json({'name':'the name', 'content': 'data'});
});


app.get('/*', function(req, res) {
  return res.status(200).sendFile(idxFile);
});

var httpServer = http.createServer(app);

httpServer.listen(PORT, function() {
  return console.log('info', "Server running on " + PORT);
});
