var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = module.exports = function(nodeEnv, host, port){

	var PRODUCTION = nodeEnv === 'production';
	var DEVELOPMENT = nodeEnv === 'development';
	var TEST = nodeEnv === 'test';

	// Basic config
	var config = {};

	config.resolve = {
	  extensions: ['', '.js'],
	  modulesDirectories: ['node_modules'],
	  root: path.resolve('.')
	};
	config.plugins = [
		new webpack.DefinePlugin({
		'process.env.NODE_ENV': nodeEnv
		})
	];

	config.sassLoader = {
		outputStyle: 'compressed',
	  precision: 10,
	  sourceComments: false
	};

	config.output = {
		filename: 'bundle.js',
		path: path.resolve('./dist'),
		publicPath: '/'
	};
	
	config.module = {
		loaders: []
	};
	config.module.loaders.push({
		test: /\.js$/, 
		exclude: /node_modules/, 
		loader: 'babel'
	});

	// General config
	if (PRODUCTION || DEVELOPMENT) {
		config.devtool = 'eval';

		config.entry = {
			main: ['./src/index.js']
		};
	}

	if (DEVELOPMENT) {
		config.entry.main.unshift(
			`webpack-dev-server/client?http://${host}:${port}`,
			'webpack/hot/only-dev-server'
		);

		config.module.loaders.push({
			test: /\.scss$/, 
			loader: 'style!css!postcss!sass'
		});

		config.plugins.push(
 			new webpack.HotModuleReplacementPlugin()
		);
		
		config.devServer = {
			contentBase: './src',
	    historyApiFallback: true,
	    host: host,
	    port: port,
	    hot: true
		}
	}

	if (PRODUCTION) {
		config.entry.vendor = './src/vendor.js';

	  config.module.loaders.push({
	  	test: /\.scss$/, 
	  	loader: ExtractTextPlugin.extract(
	  		'css?-autoprefixer!postcss!sass'
		  	)
		  });

		config.plugins.push(
			new ExtractTextPlugin('styles.css'), 
			new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      minChunks: Infinity
    	}), 
    	new webpack.optimize.UglifyJsPlugin({
	      mangle: true,
	      compress: {
	        dead_code: true, // eslint-disable-line camelcase
	        screw_ie8: true, // eslint-disable-line camelcase
	        unused: true,
	        warnings: false
	      }
    	}),
    	new webpack.optimize.DedupePlugin()
		);
	}

	if (TEST) {
		config.devtool = 'inline-source-map';
		config.module.loaders.push({
			test: /\.scss$/, 
			loader: 'style!css!postcss!sass'
		})
	}
	return config
}
























