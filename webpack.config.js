const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    './public/assets/bundle' : [
      './public/javascripts/manifest.js',
      './public/stylesheets/manifest.js'
    ]
  },
  output: {
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      // Extract css files
      {  
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
    	comments: false,
      minimize: true,
      compress:{
      		drop_console: true
   		}
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /.*css/,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
    }),
    new ExtractTextPlugin("[name].css")     	
  ]
}