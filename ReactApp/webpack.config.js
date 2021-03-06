var path = require('path');
var webpack = require('webpack');

console.log(__dirname);
module.exports = {
  entry: './components/mainDashboard.jsx',
  output: {
    path: path.resolve(__dirname, '../public/javascripts/build'),
    filename: "app.js",
  },
  devServer: { 
   inline: true, // Hot Reloading
   port: 3333 // It is the port where is going to work the server
 },



 module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

/*
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
        
      { test: /\.css$/, loader: "style-loader!css-loader" }
      
    ]
  }
};
*/
