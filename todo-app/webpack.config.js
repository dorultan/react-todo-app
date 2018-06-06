const config = {
	mode: 'development',
	entry: ['babel-polyfill', './app/app.js'],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/'
	},

	module: {
		rules: [

			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: "babel-loader"
				}
			},

			{
		      test: /\.less$/,
		      use: [{
		        loader: 'style-loader' // creates style nodes from JS strings
		      }, {
		        loader: 'css-loader' // translates CSS into CommonJS
		      }, {
		        loader: 'less-loader' // compiles Less to CSS
		      }]
		    },

		    {
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
			    'file-loader',
			    {
			      loader: 'image-webpack-loader',
			      options: {
			        bypassOnDebug: true, // webpack@1.x
			        disable: true, // webpack@2.x and newer
			      },
			    },
			  ],
			}
		]
	},

	devServer: {
		port: process.env.port || 3000,
		contentBase: './build',
		inline: true
	}
};

module.exports = config;