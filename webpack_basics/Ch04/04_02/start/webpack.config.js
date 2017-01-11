module.exports = {
	entry: ,
	output: ,
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