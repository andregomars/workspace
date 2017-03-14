const webpack = require('webpack');

module.exports = {
 entry: './src/app.ts',
 output: {
   filename: 'app.bundle.js',
   path: __dirname + '/bin'
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 plugins: [
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
  ]
};