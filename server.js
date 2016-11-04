// Work for react-hot-loader
var webpack = require('webpack');
var dotenv = require('dotenv').config();
var WebpackDevServer = require('webpack-dev-server');
var developerConfig = require('./webpack.dev.config');
var productionConfig = require('./webpack.pro.config');

console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`)

if (process.env.NODE_ENV === 'production') {
	return new WebpackDevServer(webpack(productionConfig), {
				publicPath: productionConfig.output.publicPath,
			}).listen(8080, '0.0.0.0', function (err, res){
				if (err){
					return console.log(err);
				}
				console.log(`Server ${process.env.NODE_ENV} listening at http://0.0.0.0:8080`)
			});
	} else {
		return new WebpackDevServer(webpack(developerConfig), {
			publicPath: developerConfig.output.publicPath,
			hot: true,
			historyApiFallback: true
		}).listen(3000, '0.0.0.0', function (err, result){
			if (err){
				return console.log(err);
			}
			console.log('react-hot-loader Listening at http://0.0.0.0:3000/');
		});
}