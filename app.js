var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('hello drostino')
})

app.listen(3000, function(){
    console.log('express server running on port 3000')
})