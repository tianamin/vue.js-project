var path=require("path");
var { VueLoaderPlugin}=require("vue-loader");
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
                                      

var webpack=require('webpack');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require("extract-text-webpack-plugin");

var merge=require("webpack-merge");
var webpackBaseConfig=require("./webpack.config.js");

webpackBaseConfig.plugins=[];



module.exports=merge(webpackBaseConfig,{
    mode:"production",
	
	output:{
		publicPath:"/vue.js-book/shopping/dist/",
		filename:'[name].[hash].js',
	},
	plugins:[
		new VueLoaderPlugin(),
		new ExtractTextPlugin({
			filename:"[name].[hash].css",
			allChunks:true

		}),
		new webpack.DefinePlugin({
			"process-env":{
				NODE_ENV:JSON.stringify('production')
				}
		}),
		new UglifyJSWebpackPlugin({

		}),
		new  HtmlWebpackPlugin({
			filename:"../index_prod.html",
			template:"./index.ejs",
			inject:false
		})

	]
});



// module.exports={                         //重新定义输出模块
//   entry:{
//       main:"./main.js"
//     },

//   output:{
//       path:path.join(__dirname,"./dist"), 

//       publicPath:"/shopping/dist/",
//       filename:'[name].[hash].js',
      
//   },

//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',       
//          options:{
//          loaders:{
//            css:ExtractTextPlugin.extract({
//              use:"css-loader",
//              fallback:"vue-style-loader",           
//            })
//          }
//        }
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude:/node_modules/
//       },
//       // this will apply to both plain .css files
//       // AND <style> blocks in vue files
//       {
//         test: /\.css$/,
//         use:ExtractTextPlugin.extract({
//           use:'css-loader',
//           fallback:'style-loader',              
//         })                           
//       },
//       {
//        test: /\.(png|jpg)$/,
//       　loader: 'url-loader?limit=8192&name=img/[name].[hash].[ext]'
//       }
//       　
//     ]
//   },
//   plugins: [
//      new VueLoaderPlugin(),

//           new ExtractTextPlugin({
//              filename:'[name].[hash].css',
//              allChunks:true
//           }),

         
//           new webpack.DefinePlugin({
//             "process.env":{
//              NODE_ENV:JSON.stringify('production')
//              // NODE_ENV: '"production"'
//             }
//           }),   
//            new UglifyJSWebpackPlugin({
//                 // sourceMap: true
//            }),
//           new HtmlWebpackPlugin({
//             filename:'../index_prod.html',
//             template:'./index.ejs',
//             inject:false
//           })
//   ],
//   resolve: { 
//     alias: { 'vue$':'vue/dist/vue.js'}
//    }                       
  
// };











