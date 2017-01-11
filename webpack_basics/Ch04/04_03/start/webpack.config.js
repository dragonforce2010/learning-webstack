var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		about: './dist/about',
		contact: './dist/contact'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
				{
			    test: /\.(png|jpg)$/,
			    loader: 'url-loader?limit=10000'
			}
	 ]
	}
};





