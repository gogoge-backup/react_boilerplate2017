const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpack = require('webpack')
module.exports = {
  entry: {
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      __dirname + '/src/App/root.js',
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react-hmre']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
            }
          },
          'postcss-loader',
          // 'less-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({ // source map
      filename: '[name].js.map',
      exclude: ['vendor.js'],
      module: true,
      columns: true,
      lineToLine: false,
    }), 
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'templeate.html', // Load a custom template (lodash by default see the FAQ for details)
    })
  ],
};