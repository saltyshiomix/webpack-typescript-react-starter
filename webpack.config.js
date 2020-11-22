const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 'babel-loader',
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Babel + TypeScript + React = ❤️',
      template: 'src/index.html',
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [
      new TerserWebpackPlugin(),
    ],
  };
} else {
  // for more information, see https://webpack.js.org/configuration/dev-server
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
  };
}

module.exports = config;
