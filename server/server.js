var express = require('express');
var app = express();
var port = 3002;


app.use(express.static(__dirname + '/../client'));

app.listen(port,function(){
	console.log('magic start on:',port);
});