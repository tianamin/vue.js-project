
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
 
const  ExtractTextPlugin=require("extract-text-webpack-plugin");
const webpack = require ("webpack");  
const webpackDevServer = require('webpack-dev-server');  

module.exports = {
  mode: 'development',
  entry:{
      main:"./main.js"
  },

  output:{
      path:path.join(__dirname,"./dist"),  
      publicPath:"/dist/",       
      filename:"main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',       
        
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      },
      // this will apply to both plain .css files
      // AND <style> blocks in vue files
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
          use:'css-loader',
          fallback:'style-loader',              
        })                           
      },
      {
       test: /\.(png|jpg)$/,
      　loader: 'url-loader?limit=8192&name=img/[name].[hash].[ext]'
      }
      　
    ]
  },
  plugins: [
 
    new VueLoaderPlugin(),
    new ExtractTextPlugin("main.css"),
  ],
   devServer:{                                     //配置  
      contentBase: "./",   
      historyApiFallback:true,  
      inline:true,  
      progress:true,  
      hot:true,  
      port:8080  
  },  
  resolve: {                              //模块的解析
    alias: { 'vue$':'vue/dist/vue.js'}           //创建import或require的别名。
                                                   //vue - vue/dist/vue.js (在main.js中k看引入)
                                                   //$代表精准匹配
   }
 
}






