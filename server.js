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

app.get('/*', function(req, res) {
  var idxFile = join(__dirname, 'static/index.html');
  return res.status(200).sendFile(idxFile);
});

var httpServer = http.createServer(app);

httpServer.listen(PORT, function() {
  return console.log('info', "Server running on " + PORT);
});
