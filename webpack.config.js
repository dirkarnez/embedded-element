const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

const config = {
   mode: dev ? 'development' : 'production',
   entry: './src/index.ts',
   output: {
      filename: 'embedded.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'embeddedComponent',
      libraryTarget: 'umd'
   },
   resolve: {
     extensions: ['.js', '.jsx', '.ts', '.tsx'],
   },
   module: {
     rules: [
         {
            test: /\.tsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
     ],
   }
   //, plugins: [
   //    new HtmlWebpackPlugin({
   //       title: 'Babel + TypeScript + React = ❤️',
   //       template: 'src/index.html'
   //    }),
   // ],
 };
 
 if (dev) {
   config.devServer = {
      // contentBase: distPath,
      // historyApiFallback: true,
      port: 8080, // https://webpack.js.org/configuration/dev-server/#devserverport
      open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
      hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
      compress: true, // https://webpack.js.org/configuration/dev-server/#devservercompress
      stats: 'errors-only', // https://webpack.js.org/configuration/dev-server/#devserverstats-
      overlay: true, // https://webpack.js.org/configuration/dev-server/#devserveroverlay
   };
} else {
   config.optimization = {
      minimizer: [
         new TerserPlugin(),
      ],
   };
}

module.exports = config;