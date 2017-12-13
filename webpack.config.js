var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

   entry: './assets/js/app.js',
	output: {
		path: path.resolve(__dirname, 'public/js/'),
		filename: 'app.bundle.js'
	},
   	module: {
		rules: [

			{
		    	test  : /\.scss$/,
		    	loader:  ExtractTextPlugin.extract({
		    		fallback:"style-loader",
		    		use:"css-loader!sass-loader"
		    	})
	   		},
		],

	},
   	plugins: [
       new ExtractTextPlugin('./../css/app.css'),
       new BrowserSyncPlugin({
	    	host: 'localhost',
	    	port: 3000,
	    	files: ['./*.php'],
	    	proxy: 'localhost',
	    })
 	],
   	watch: true,
  
};
