var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
    res.send('hello drostino');
});

http.createServer(app).listen(app.get('port'),function(){
    console.log('express server listening on port ' + app.get('port'));
});