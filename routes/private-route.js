module.exports = function( app ) {
	var express = require( 'express' );
	var router = express.Router();
	var fs = require( 'fs' );
	var routes = [];

	router.all( 'app/*', function( req, res, next ) {

		// Should check if user has valid authentication.

		next();
	});

	// Read dir to get all files into it.
	// In this case you can read sync because this 
	// script just runs once ( when nodejs starts ).
	routes = fs.readdirSync( './routes/private' );
	
	// Travel all private routes files.
	routes.forEach( function( routeFile ) {
		// Require and execute route module.
		require( './private/' + routeFile )( app );
	});


	app.use( '/', router );
};