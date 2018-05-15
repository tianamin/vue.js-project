const path=require("path");
var {VueLoaderPlugin}=require("vue-loader");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

 const webpack = require ("webpack"); 

 var  HtmlWebpackPlugin=require("html-webpack-plugin");

var merge=require("webpack-merge");

var webpackBaseConfig = require('./webpack.config.js');

webpackBaseConfig.plugins=[];


module.exports=merge(webpackBaseConfig,{
	mode:"production",
	output:{
		publicPath: '/router/dist/',
		filename:'[name].[hash].js'
	},
	plugins:[
		new VueLoaderPlugin(),
		new ExtractTextPlugin({
			filename:"[name].[hash].css",
			allChunks:true
		}),
		new webpack.DefinePlugin({
		    'process.env': {
		        NODE_ENV: '"production"'
		    }
		}),
		new UglifyJSWebpackPlugin(),
		new HtmlWebpackPlugin({
		    filename: '../index_prod.html',
		    template: './index.ejs',
		    inject: false
		})
	]
})

