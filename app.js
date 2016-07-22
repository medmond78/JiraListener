var express = require('express');
var app = express();
var request = require("request");
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true } ));
app.use(bodyParser.json());


// Create a route to respond to a webhook POST request
app.post('/listen', function(req, res) {
    console.log('Hey we got a POST request');
	console.log(req.body);
	res.send({ status: 'SUCCESS' });

});



app.listen(process.env.PORT || 3000);



