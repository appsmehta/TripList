var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.bodyParser());
app.use(express.cookieParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', home.signin);

 app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

 app.post('/checkTrip',function(req,res){
	console.log(req)
	if(req.body.source!=req.body.destination){
		res.json({valid:true});
	}
	else{
		res.json({valid:false});	
	}

});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});