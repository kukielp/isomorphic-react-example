require("babel-register")({presets: ['react', 'es2015']});

var express = require('express');
var path = require('path');
var http = require('http');
var jade = require('jade');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade')

var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var ReactRouter = require('react-router');
var match = ReactRouter.match;
var RouterContext = ReactRouter.RouterContext;
var Routes = require('./src/routes').default;

app.use('/', function(req, res) {
	match({ routes: Routes, location: req.url }, function(error, redirectLocation, renderProps){
		if (error) {
		    res
		        .status(500)
		        .send(error.message);
		} else if (redirectLocation) {
		    res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			var html = renderToString(React.createElement(RouterContext, {
				router: renderProps.router,
				location: renderProps.location,
				routes: renderProps.routes,
				params: renderProps.params,
				components: renderProps.components
			}));
			res.render('index', {html: html});
		} else {
		    res
		        .status(404)
		        .send('Not found aroo');
		}
	});
});

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);