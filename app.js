var express = require( 'express' );
var app = express();

// Require main route files.
require( './routes/public-route' )( app );
require( './routes/private-route' )( app );

app.listen( 85 );

console.log( 'Listen port: 85' );