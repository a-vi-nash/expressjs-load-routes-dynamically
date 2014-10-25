module.exports = function( app ) {
	var express = require( 'express' )
	  , router = express.Router()
	  , controller = require( '../../controllers/demo-controller' )(); 

	router
		.route( '/' )
		.get( controller.genericResponse ) // list
		.post( controller.genericResponse ) // create;

	router
		.route( '/:id' )
		.get( controller.genericResponse ) // get
		.put( controller.genericResponse ) // update
		.delete( controller.genericResponse ); // delete

	app.use( '/app/user', router );
};