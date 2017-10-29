var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3000);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
	extended : true
})
);
app.get('/', function(req, res){
	res.end('Server ON');
});

app.get('/user', function(req, res){
	res.json ([
		{name:'teste'}
	]);
});
app.get('/user/:id', function(req, res){
	res.end('Get Users');
});
app.post('/user/', function(req, res){
	res.end('Post Users');
});
app.put('/user/:id', function(req, res){
	res.end('Put Users');
});
app.delete('/user/:id', function(req, res){
	res.end('Delete Users');
});
