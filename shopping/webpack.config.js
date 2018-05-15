
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const  ExtractTextPlugin=require("extract-text-webpack-plugin");
const webpack = require ("webpack");  
const webpackDevServer = require('webpack-dev-server');  


module.exports = {
  mode:"development",
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
        test:/\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
        loader:"url-loader?limit=1024"
      }
      
    ]
  },
  plugins: [
 
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
       filename: '[name].css',
       allChunks: true
    }),
    // new webpack.HotModuleReplacementPlugin()  
  ],
   devServer:{                                     //配置  
      contentBase: "./",   
      historyApiFallback:true,  
      inline:true,  
      progress:true,  
      hot:true,  
      port:8080  
  },  
  resolve: { 
     alias:{ 
        'vue$':'vue/dist/vue.js',     
      }

   },
}
















