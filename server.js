var express=require('express');
var env=process.env.NODE_ENV=process.env.NODE_ENV||'development';

var app=express();

//app.configure(function(){
	//set view properties equal to path where views need to be stored
	app.set('views', './server/views');
	//set view engine
	app.set('view engine', 'jade');
//});

//add route to deliver index page

// * route = comatches all routesany request gets to this route is handled by it js/css/img all
//reason for * i want to get my index page delivered when dont have any existing path for req
//server return index page then client side routing decides appropriate page
//can be dangerous if forget even a slash lead to hangging ng, infinite digest error

//sol : server & client coordinating routes


// / route=root of the website
app.get('*', function(req, res){
	res.render('index');
});

var port=3030;
app.listen(port);

console.log('we are running on'+ port+'....');