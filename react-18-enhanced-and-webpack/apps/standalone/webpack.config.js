const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {import('webpack').Configuration & { devServer?: import('webpack-dev-server').Configuration }}
 */
const config = {
  entry: './src/index',
  mode: 'development',
  cache: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3012,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: `auto`,
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/favicon.ico',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    emitOnErrors: true,
    moduleIds: 'deterministic',
    usedExports: true,
    splitChunks: {
      chunks: 'async',
      minChunks: 1,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: 'true',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: -10,
          name: 'vendor',
          reuseExistingChunk: true,
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'source-map',
};

module.exports = config;
