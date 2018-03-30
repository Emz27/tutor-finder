var webpack = require('webpack');
var path = require('path');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var LOCAL_DIR = path.resolve(__dirname, 'src/build');
var SERVER_DIR = path.resolve(__dirname, '../../../../../xampp-5.6.30/htdocs/build');
var APP_DIR = path.resolve(__dirname, 'src/app');

var localBuild = {
  name: "a",
  devtool: 'source-map',
  entry: [APP_DIR + '/index.jsx'],
  output: {
    path: LOCAL_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-2']
        }
      },
      {
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             publicPath: '../src/build/fonts/'       // override the default path
           }
         }]
       },
       {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }


    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    // ,
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery"
    // })
    // ,
    // // new BundleAnalyzerPlugin(),
    // new webpack.DefinePlugin({
    //  'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   mangle: true,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   exclude: [/\.min\.js$/gi] // skip pre-minified libs
    // })
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};


module.exports = [
  localBuild
];
