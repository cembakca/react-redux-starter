const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mainPath = path.join(__dirname, './src');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/index.js'
    ]
  },
  // entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      src: mainPath,
      ui: path.resolve(mainPath, 'ui'),
      apps: path.resolve(mainPath, 'ui/apps'),
      modules: path.resolve(mainPath, 'ui/modules'),
      data: path.resolve(mainPath, 'data')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        use: 'babel-loader?cacheDirectory=true',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|eot|jpe?g|woff|woff2|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      {
        test: /.*\.(svg)$/i,
        include: path.resolve(mainPath, 'ui/svg/inline'),
        use: 'svg-inline-loader'
      },
      {
        test: /.*\.(svg)$/i,
        include: path.resolve(mainPath, 'ui/svg/default'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000
          }
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
