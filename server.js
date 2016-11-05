var webpack = require('webpack');
var dotenv = require('dotenv').config();
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var NODE_ENV = process.env.NODE_ENV;
var HOST = NODE_ENV === 'production'
	? '0.0.0.0'
	: 'localhost';
var PORT = NODE_ENV === 'production'
	? 3000
	: 8063;

var webpackConfig = config(NODE_ENV, HOST, PORT);
console.log(`Start node server for ${NODE_ENV}`)
new WebpackDevServer(webpack( webpackConfig ), {
	publicPath: webpackConfig.output.publicPath,
}).listen(PORT, HOST, function(err, res){
	if (err) {
		console.log(err);
	}
	console.log(`now listening at http://${HOST}:${PORT}`)
})
