const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');         //压缩使用插件

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var merge=require("webpack-merge");
var  webpackBaseConfig =require("./webpack.config.js");

// 清空基本配置的插件列表

 webpackBaseConfig.plugins = [];

module.exports= merge(webpackBaseConfig, {             //在webpack.config.js基础上合并

  output:{
      publicPath:"/vue-SPA/dist/",         //注意  dist后面的斜杠，如果缺少，路径会出错误
      filename:'[name].[hash].js',
      
  },
  plugins: [

      new VueLoaderPlugin(),

      new ExtractTextPlugin({
         filename:'[name].[hash].css',
         allChunks:true
      }),

     
      new webpack.DefinePlugin({
        "process.env":{
         NODE_ENV:JSON.stringify('production')
         // NODE_ENV: '"production"'
        }
      }),   
       new UglifyJSWebpackPlugin({
            // sourceMap: true
       }),
      new HtmlWebpackPlugin({                    //生成html文件。
        filename:'../index_prod.html',         //生成的文件均在path下。此时改变路径
        template:'./index.ejs',                //  html模板，ejs会生成动态html。也可以直接html文件
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

//       publicPath:"/vue-SPA/dist/",
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




