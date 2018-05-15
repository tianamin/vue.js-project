const path = require('path');
const webpack = require ("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackDevServer = require('webpack-dev-server');


module.exports = {
  entry: './src/index.js',
  
  output: {
 
    filename: "my-first-webpack.bundle.js",
    path:path.resolve(__dirname,"dist")
  },
  module:{
    rules:[
    {
      test:/\.css$/,   
      use:ExtractTextPlugin.extract({
          use:"css-loader",
          fallback:"style-loader",       
      })
    }
    ]
  },
  devServer:{
      contentBase: "./", 
      historyApiFallback:true,
      inline:true,
      progress:true,
      hot:true,
      port:8080
  },

  plugins:[
       new ExtractTextPlugin("main.css")
   ]
 };
  